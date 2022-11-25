const app = require('./app');
const connectWithDb = require('./config/db');

//connect with db
connectWithDb();

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
	console.log(`connected at port ${PORT}`);
})




