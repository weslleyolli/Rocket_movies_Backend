const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class moviesNotesControllers {
    async create(request, response) {
        const { title, description, tags } = request.body
        const { user_id } = request.params

        if (!Array.isArray(tags)) {
            return response.status(400).json({ error: 'Tags should be an array' });
          }

        const { note_id }  = await knex("notes").insert({
            title,
            description,
            user_id
        })
        const tagsInsert = tags.map(name => {
            return{
                note_id,
                name,
                user_id
            }
        })

        await knex("tags").insert(tagsInsert)

        if(!title || !description){
            throw new AppError("Please enter a title,  a description")
        }

        response.status(201).json({title, description, tags})
    }
    show(request, response) {

    }

    delete(request, response) {
        
    }
}

module.exports = moviesNotesControllers;
