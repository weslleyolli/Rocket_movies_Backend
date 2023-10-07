const { Router } = require("express")

const MoviesNotesControllers = require("../controllers/moviesNotesController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const movieNotesRoutes = Router()

const notesControllers = new MoviesNotesControllers()

movieNotesRoutes.use(ensureAuthenticated)

movieNotesRoutes.post("/", notesControllers.create)
movieNotesRoutes.get("/:id", notesControllers.show)
movieNotesRoutes.get("/", notesControllers.index)
movieNotesRoutes.delete("/:id", notesControllers.delete)

module.exports = movieNotesRoutes