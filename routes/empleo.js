const express = require('express');
const EmpleoServices = require("../services/empleo")

function empleo(app){
	const router = express.Router();
	let empleoServices = new EmpleoServices();

	app.use('/api/empleos', router);

	router.get('/', async (req, res)=>{
		const empleo = await empleoServices.obtenerTodos();
		return res.json(empleo);
	});

	router.post('/', async (req, res)=>{
		const empleo = await empleoServices.crearEmpleo(req.body);
		return res.json(empleo);
	});

	router.put('/:id', async (req, res) =>{
        const empleo = await empleoServices.actualizar(req.params.id, req.body);
        return res.json(empleo);
    })

    router.get('/salario:salario', async (req, res)=>{
     	const empleo = await empleoServices.obtenerPorSalario(req.params.salario);
    	return res.json(empleo);
    });

    router.get('/nombre/:nombre', async (req, res)=>{
    	const empleo = await empleoServices.obtenerDescripcionNombre(req.params.nombre);
    	return res.json(empleo)
    });

	router.get('/etiquetas/:etiquetas', async (req, res)=>{
		const empleo = await empleoServices.obtenerPorEtiqueta(req.params.etiquetas);
		return res.json(empleo);
	});

}

module.exports = empleo;