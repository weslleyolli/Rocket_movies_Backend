const { Router } = require("express")

const UsersControllers = require("../controllers/usersController")

const userRoutes = Router()

const usersControllers = new UsersControllers()

userRoutes.post("/", usersControllers.create)
userRoutes.put("/:id", usersControllers.update)

module.exports = userRoutes