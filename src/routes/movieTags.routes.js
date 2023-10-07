const { Router } = require("express")

const MoviesTagsControllers = require("../controllers/moviesTagsController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const movieTagsRoutes = Router()

const moviesTagsControllers = new MoviesTagsControllers()

movieTagsRoutes.get("/", ensureAuthenticated, moviesTagsControllers.index)

module.exports = movieTagsRoutes