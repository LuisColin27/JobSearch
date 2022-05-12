const UserModel = require("../models/User");
const bcrypt = require('bcrypt');

class User{
	async obtenerTodos(){
		try {
			let users = await UserModel.find();
			return users;
		} catch(e) {
			console.log(e);
		}
	}

	async crearUsuario(data){
        try{
            if(data.password){
            	data.password = await this.#encrypt(data.password);
        	}

        	const user = await UserModel.create(data);

        	if(user.error){
            	return user;
        	}

        	return this.#getUserData(user);
        }catch(error){
            console.log(error);
            if(error.code == 11000){
                const message = `El correo ${error.keyValue.email} ya esta en uso`;

                return {
                    error: true,
                    message
                }
            }
        }
    }

     async actualizar(id, data){
        try{
            const user = await UserModel.findByIdAndUpdate(id,data,{new:true});
            return user;
        }catch(error){
            console.log(error);
        }
    }

    async borrar(id){
        try{
            const user = await UserModel.findByIdAndDelete(id);
            return user;
        }catch(error){
            console.log(error);
        }
    }


    async #encrypt(string){
        try{
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(string, salt);
            return hash;
        }catch(error){
            console.error(error);
        }
    }

 #getUserData(user){
        const userData ={
            name: user.nombre,
            email: user.email,
            role:user.role,
            id: user.id
        }

        //const token = this.#createToken(userData);
        return {
            user: userData,
        }
    }

}


module.exports = User;