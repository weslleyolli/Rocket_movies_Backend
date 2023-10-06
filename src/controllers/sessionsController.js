const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class sessionsController {
    async create(request, response) {
        const { email, password } = request.body

        const user = await knex("users").where({ email }).first()

        if (!user) {
            throw new AppError("Email and password incorrect", 401)
        }

        return response.json(user)
    }
}

module.exports = sessionsController