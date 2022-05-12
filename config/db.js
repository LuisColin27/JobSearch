const mongoose = require("mongoose");
const { DBUsername, DBPassword, DBHost, DBName } = require(".");

const connection = async ()=>{
	const conn = await mongoose.connect(`mongodb+srv://${DBUsername}:${DBPassword}@${DBHost}/${DBName}?retryWrites=true&w=majority`);
	console.log("Mongo DB Connected: "+conn.connection.host)
}

module.exports = { connection, mongoose };