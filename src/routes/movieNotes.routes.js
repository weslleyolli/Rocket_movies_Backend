const { Router } = require("express")

const MoviesNotesControllers = require("../controllers/moviesNotesController")

const movieNotesRoutes = Router()

const notesControllers = new MoviesNotesControllers()

movieNotesRoutes.post("/", notesControllers.create)

module.exports = movieNotesRoutes