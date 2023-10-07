const AppError = require("../utils/AppError")
const knex = require("../database/knex")
const { hash, compare } = require("bcryptjs")

class usersControllers {
    async create(request, response) {
        const { name, email, password } = request.body

        if (!name || !email || !password) {
            throw new AppError("Please enter a name, a email and password")
        }

        const hashed = await hash(password, 8)

        await knex('users').insert({
            name,
            email,
            password: hashed
        });

        response.status(201).json({ name, email, hashed })
    }
    async update(request, response) {
        const { name, email, password, old_password } = request.body
        const user_id = request.user.id

        const user = await knex('users').where("id", user_id).first()

        if (!user) {
            throw new AppError("User does not exist")
        }
        const userWithUpdateEmail = await knex('users').where('email', email).first()

        if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
            throw new AppError("This email already exists")
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if (password && !old_password) {
            return response.status(400).json({ error: 'Você precisa informar a senha antiga para definir a nova senha' });
        }

        if (password && old_password) {
            // Verifique a senha antiga
            const checkOldPassword = await compare(old_password, user.password);

            if (!checkOldPassword) {
                return response.status(400).json({ error: 'A senha antiga não confere' });
            }

            // Hash da nova senha
            user.password = await hash(password, 8);
        }
        await knex('users')
            .where('id', user_id)
            .update({
                name: user.name,
                email: user.email,
                password: user.password,
                updated_at: knex.raw('DATETIME("now")')
            });

        response.status(201).json({ name, email, password, old_password })

    }
}

module.exports = usersControllers;
