//const AppError = require('./utils/AppError')
const express = require('express')
const routes = require('./routes')

const app = express()
app.use(express.json())

app.use(routes)

app.post("/users", (request, response) => {
    const { name, email, password } = request.body
    response.json({name, email, password})
})

const port = 3030
app.listen(port,() => console.log(`server running in port: ${port}`))

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
