const AppError = require("../utils/AppError")

class moviesNotesControllers {
    create(request, response) {
        const { name, description } = request.body

        if(!name || !description){
            throw new AppError("Please enter a name,  a description")
        }

        response.status(201).json({name, description})
    }
    show(request, response) {

    }

    delete(request, response) {
        
    }
}

module.exports = moviesNotesControllers;
