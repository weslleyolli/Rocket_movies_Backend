const AppError = require("../utils/AppError")

class usersControllers {
    create(request, response) {
        const { name, email, password } = request.body

        if(!name || !email || !password){
            throw new AppError("Please enter a name, a email and password")
        }

        response.status(201).json({name, email, password})
    }
    show(request, response) {

    }

    delete(request, response) {
        
    }
}

module.exports = usersControllers;
