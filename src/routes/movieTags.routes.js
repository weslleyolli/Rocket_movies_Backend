const { Router } = require("express")

const MoviesTagsControllers = require("../controllers/moviesTagsController")

const movieTagsRoutes = Router()

const moviesTagsControllers = new MoviesTagsControllers()

movieTagsRoutes.post("/", moviesTagsControllers.create)

module.exports = movieTagsRoutes