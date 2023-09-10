const AppError = require('./utils/AppError')
const express = require('express')


const app = express()

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