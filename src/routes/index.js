const { Router } = require("express")

const usersRouter = require("./users.routes")
const movieTagsRoutes = require("./movieTags.routes")
const movieNotesRoutes = require("./movieNotes.routes")
const sessionsRoutes = require("./sessions.routes")

const routes = Router()

routes.use("/users", usersRouter)
routes.use("/sessions", sessionsRoutes)
routes.use("/tags", movieTagsRoutes)
routes.use("/notes", movieNotesRoutes)

module.exports = routes
