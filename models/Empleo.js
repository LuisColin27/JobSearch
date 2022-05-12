const {mongoose} = require("../config/db");

let Schema = mongoose.Schema;

var Empleo = new Schema({
	nombre:{
		type:String
	},
	descripcion: {
		type: String
	},
	salario:{
		type:Number
	},
	etiqueta:[String],
	create_at: {
		type: Date,
		default: Date.now
	},
	status:{
		type:String,
		enum:["Disponible", "Ocupado"]
	}
});

module.exports = mongoose.model("Empleo", Empleo);