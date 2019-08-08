const express = require('express');
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use((err, req, res, next) => {
    console.log(err.message)
    res.status(500).json({
        message: err.message
    })
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
