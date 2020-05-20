const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

//Conexão com o mongodb.
mongoose.connect(
	'mongodb+srv://exohuman:exohuman@mycluster-v6df4.mongodb.net/test?retryWrites=true&w=majority',
	{useNewUrlParser: true, useUnifiedTopology: true}
)
requireDir('./src/models')

//Rotas.
app.use('/api', require('./src/routes'))

app.listen(3001)