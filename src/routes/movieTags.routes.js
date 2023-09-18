const { Router } = require("express")

const MoviesTagsControllers = require("../controllers/moviesTagsController")

const movieTagsRoutes = Router()

const moviesTagsControllers = new MoviesTagsControllers()

movieTagsRoutes.get("/", moviesTagsControllers.index)

module.exports = movieTagsRoutes