const mongoose = require("./config/db");

let Schema = mongoose.Schema;

var Empleo = new Schema({
	nombre:{type:String}
});