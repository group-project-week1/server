const express = require('express');
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 3000
const unsplashRouter = require('./routes/unsplashRouter')
const userRouter = require('./routes/userRouter')

mongoose.connect('mongodb://localhost:27017/weather', {useNewUrlParser: true})

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', unsplashRouter)
app.use('/user', userRouter)

app.use((err, req, res, next) => {
    console.log(err.message)
    res.status(500).json({
        message: err.message
    })
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
