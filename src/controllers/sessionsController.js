const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const { compare } = require("bcryptjs")
const authConfig = require("../configs/auth")
const { sign } = require("jsonwebtoken")

class sessionsController {
    async create(request, response) {
        const { email, password } = request.body

        const user = await knex("users").where({ email }).first()

        if (!user) {
            throw new AppError("Email and password incorrect", 401)
        }

        const passwordMachted = await compare(password, user.password)

        if (!passwordMachted){
            throw new AppError("Email and password incorrect", 401)
        }
        
        const { secret, expiresIn } = await authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })

        return response.json({user, token})
    }
}

module.exports = sessionsController