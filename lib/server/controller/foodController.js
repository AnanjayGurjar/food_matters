const Food = require("../models/food");
const User = require("../models/user");
const BigPromise = require("../middleware/bigPromise");

exports.saveFoodPost = BigPromise(async (req, res, next) => {
	const { userId, isAvailable, food, foodQuantity, foodType, foodLife } =
		req.body;

	//should i check if user for userId exist or not ?

	if (!userId || !foodQuantity || !foodType || !foodLife) {
		return res.status(401).json({
			status: 401,
			message: "Please provide all the necessory information required",
		});
	}

	const request = await Food.create({
		pushedBy: userId,
		isAvailable,
		food,
		foodQuantity,
		foodType,
		foodLife
	});

	return res.status(200).json({
		status: 200,
		message: "Request saved successfully",
		request,
	});
});

exports.togglePostAvailability = BigPromise(async (req, res, next) => {
	const { id, newValue } = req.body;

	//should i check if this request exist or not ?
	const request = await Food.findByIdAndUpdate(id, { isAvailable: newValue });

	if (!request) {
		return res.status(401).json({
			status: 401,
			message: "Notofication not found",
		});
	}

	return res.status(200).json({
		status: 200,
		message: `Notification marked as ${newValue} successfully`,
		request,
	});
});
