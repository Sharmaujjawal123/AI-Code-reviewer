require('dotenv').config()
// const app = require('./src/app')

const express = require('express');
const aiRoutes = require('./src/routes/ai.routes')
const cors = require('cors')

const app = express()

app.use(cors())


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
