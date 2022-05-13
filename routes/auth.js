const express = require('express');
const AuthService = require('../services/auth');

function auth(app){
    const router = express.Router();
    const authService = new AuthService();
    app.use("/api/auth", router);

    router.post("/login", async (req, res) => {
        const result = await authService.login(req.body);
        return res.status(result.error?400:202).json(result);
    })
}

module.exports = auth;