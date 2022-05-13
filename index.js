const express = require("express");
const { port } = require("./config");
const { connection } = require("./config/db")
const cors = require("cors")

const users = require("./routes/users")
const empleo = require("./routes/empleo");
const auth = require("./routes/auth")

connection();
const app = express();

app.use(express.json());

users(app);
empleo(app);
auth(app);


app.use(cors({
	origin:["http://localhost:3000"]
}))

app.listen(port, ()=>{
	console.log("Escuchando en el http://localhost:"+port);
})