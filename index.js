const express = require("express");
const { port } = require("./config");
const { connection } = require("./config/db")
const cors = require("cors")

const app = express();

connection();

app.use(cors({
	origin:["http://localhost:3000"]
}))

app.listen(port, ()=>{
	console.log("Escuchando en el puerto "+port);
})