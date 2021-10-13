const express = require('express')
const app = express()

const productRoute = require('../api/router/productRoute')


app.use(express.json())

app.get("/", (req, res) => {
  res.send("working")
});

app.use('/api/v1', productRoute)




module.exports = app;