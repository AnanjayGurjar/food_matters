const User = require("../models/user");
const BigPromise = require("../middleware/bigPromise");

exports.signupUser = BigPromise(async (req, res, next) => {
  //include addressPoint also
  console.log(req.body);
  const {
    userId,
    name,
    phoneNumber,
    email,
    addressString,
    longitude,
    latitude,
    userType,
    documentId,
    photo,
  } = req.body;
  if (!userId) {
    console.log("User is is not coming");
    return res.status(401).json({
      status: 401,
      message: "Please provide the userId of the user",
    });
  }

  //make address required
  if (!email || !longitude || !latitude || !name || !phoneNumber || !userType) {
    return res.status(401).json({
      status: 401,
      message:
        "Please provide all required details including name, phoneNumber, email and address, foodType, UserType",
    });
  }

  const addressPoint = {
    type: "Point",
    coordinates: [longitude, latitude],
  };

  const user = await User.create({
    userId,
    name,
    phoneNumber,
    email,
    addressString,
    addressPoint,
    documentId,
    photo,
    userType,
  });

  //creating token :: (tokenId : userId)
  const token = user.getJwtToken();

  return res.status(200).json({
    status: 200,
    message: "User is added to database successfully.",
    token,
  });
});

exports.login = BigPromise(async (req, res, next) => {
  const { phoneNumber } = req.body;

  if (!phoneNumber) {
    return res.status(401).json({
      status: 401,
      message: "Please provide phone number to login",
    });
  }

  const user = await User.findOne({ phoneNumber });

  if (!user) {
    return res.status(401).json({
      status: 401,
      message: "No such user exist, please register first",
    });
  }

  const token = user.getJwtToken();

  return res.status(200).json({
    status: 200,
    message: "Login Successful",
    token,
  });
});
