require('express-async-errors')
const database = require('./database/sqlite')
const AppError = require('./utils/AppError')
const uploadConfig = require("./configs/upload")

const cors = require('cors')
const express = require('express')
const routes = require('./routes')

const app = express()
app.use(cors())
app.use(express.json())

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes)
database()

app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.log(error)

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

const port = 3333
app.listen(port,() => console.log(`server running in port: ${port}`))