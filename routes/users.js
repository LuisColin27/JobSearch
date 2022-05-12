const express = require('express');
const UserServices = require("../services/users")


function users (app) {
	const router = express.Router();
	const userServices = new UserServices();

	app.use('/api/user', router);

	router.get('/', async (req, res)=>{
		const users = await userServices.obtenerTodos();
		return res.json(users);
	});


	router.post('/', async (req, res)=>{
		const respuesta = await userServices.crearUsuario(req.body);
        return res.status(respuesta.error?400:202).json(respuesta);
	});


	 router.put('/:id', async (req, res) =>{
        const user = await userServices.actualizar(req.params.id, req.body);
        return res.json(user);
    })

    router.delete('/:id', async (req, res) =>{
        const user = await userServices.borrar(req.params.id);
        return res.json(user);
    })
}

module.exports = users;