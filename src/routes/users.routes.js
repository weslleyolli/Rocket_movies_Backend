const { Router } = require("express")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const UsersControllers = require("../controllers/usersController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const userRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const usersControllers = new UsersControllers()

userRoutes.post("/", usersControllers.create)
userRoutes.put("/", ensureAuthenticated, usersControllers.update)
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (request, response) => {
    console.log(request.file.filename)
    response.json()
})

module.exports = userRoutes