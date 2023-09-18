const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class usersControllers {
    async create(request, response) {
        const { name, email, password } = request.body

        if(!name || !email || !password){
            throw new AppError("Please enter a name, a email and password")
        }

        await knex('users').insert({
            name,
            email,
            password
          });

        response.status(201).json({name, email, password})
    }
    show(request, response) {

    }

    delete(request, response) {
        
    }
}

module.exports = usersControllers;
