const { Router } = require("express")

const MoviesTagsControllers = require("../controllers/moviesTagsController")

const movieTagsRoutes = Router()

const moviesTagsControllers = new MoviesTagsControllers()

movieTagsRoutes.get("/:user_id", moviesTagsControllers.index)

module.exports = movieTagsRoutes