const { Router } = require("express")

const MoviesNotesControllers = require("../controllers/moviesNotesController")

const movieNotesRoutes = Router()

const notesControllers = new MoviesNotesControllers()

movieNotesRoutes.post("/:user_id", notesControllers.create)
movieNotesRoutes.get("/:id", notesControllers.show)
movieNotesRoutes.get("/", notesControllers.index)
movieNotesRoutes.delete("/:id", notesControllers.delete)

module.exports = movieNotesRoutes