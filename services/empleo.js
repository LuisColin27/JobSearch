const EmpleoModel = require('../models/Empleo');

class Empleo{

	async obtenerTodos(){
		try {
			let empleo = await EmpleoModel.find({"status":"Disponible"});
			return empleo;
		} catch(e) {
			console.log(e);
		}
	}


	async crearEmpleo(data){
		try {
			const empleo = await EmpleoModel.create(data);
			return this.#getEmpleoData(empleo);
		} catch(e) {
			console.log(e);
		}
	}

	 async actualizar(id, data){
        try{
            const empleo = await EmpleoModel.findByIdAndUpdate(id,data,{new:true});
            return empleo;
        }catch(error){
            console.log(error);
        }
    }

    async obtenerPorSalario(salario){
    	try {
    		let empleo = await EmpleoModel.find({$and:[{"salario":{$gt:salario}}, {"status":"Disponible"}]}, {nombre:1});
    		return empleo;
    	} catch(e) {
    		console.log(e);
    	}
    }

    async obtenerDescripcionNombre(nombre){
    	try {
    		let descripcion = await EmpleoModel.find({ 'nombre' : { '$regex' : nombre, '$options' : 'i' } }, {descripcion:1, nombre:1})
    		return descripcion;
    	} catch(e) {
    		// statements
    		console.log(e);
    	}
    	
    }


	async obtenerPorEtiqueta(etiqueta){
		try {
			let empleo = await EmpleoModel.find({"etiqueta": {
				"$regex": etiqueta,
				"$options": "i"
			}});
			return empleo;
		} catch (error) {
			console.log(error.message);
		}
	}
    
	 #getEmpleoData(empleo){
        const empleoData ={
            nombre: empleo.nombre,
            descripcion: empleo.descripcion,
            salario: empleo.salario,
            etiqueta: empleo.etiqueta,
            id: empleo.id
        }

        return {empleo: empleoData}
    }
}

module.exports = Empleo;