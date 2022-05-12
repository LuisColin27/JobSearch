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

    async obtenerPorSalario(data){
    	try {
    		let empleo = await EmpleoModel.find();
    		return this.#getEmpleoData(empleo);
    	} catch(e) {
    		console.log(e);
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