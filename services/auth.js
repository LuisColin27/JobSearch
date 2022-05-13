const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const UserServices = require("./users");
const { jwtSecret } = require("../config");

class Auth{

	 async login(data){
        const {email, password} = data;
        const userServices = new UserServices();
        const user = await userServices.getUsuarioPorEmail(email);

        if(user && await this.#compare(user.password, password)){
            return this.#getUserData(user);
        }

        return{
	            error:true,
	            message:"Las credenciales son incorrectas"
        };

    }


     #getUserData(user){
        const userData ={
            name: user.name,
            email: user.email,
            role:user.role,
            id: user.id
        }

        const token = this.#createToken(userData);
        return {
            user: userData,
            token
        }
    }

    #createToken(payload){
        const token = jwt.sign(payload,jwtSecret,{
            expiresIn:'7d'
        });
        return token;
    }

     
    async #compare(hash, string){
        return await bcrypt.compare(string, hash);
    }

}

module.exports = Auth;