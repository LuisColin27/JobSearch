const {mongoose} = require("./config/db");

let Schema = mongoose.Schema;

var User = new Schema({
	nombre:{type:String},
	email:{
		type:String,
		unique: true
	},
	password:{type:String},
	role:{
		type:String,
		enum:["Postulante", "Reclutador", "Administrador"]
	},
	create_at: {type:Date, default:Date.now},
	status:{
		type:String,
		enum:["Activo", "Inactivo"]
	}

});

module.exports = mongoose.model('User', User);