const { Router } = require("express")

const UsersControllers = require("../controllers/usersController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const userRoutes = Router()

const usersControllers = new UsersControllers()

userRoutes.post("/", usersControllers.create)
userRoutes.put("/", ensureAuthenticated, usersControllers.update)

module.exports = userRoutes