const express = require('express');
const cors = require('cors')
const livrosRotas = require('./routes/livroRotas')

const app = express();

app.use(express.json())
app.use(cors())

app.use("/livros" , livrosRotas)

module.exports = app
