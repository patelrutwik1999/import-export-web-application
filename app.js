const express = require('express')
require('dotenv').config()

const app = express()

const port = process.env.PORT || 10934
app.listen(port, () => {
    console.log(`App is running on ${port}`)
})