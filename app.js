global.db = require('./db')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000 //porta padrão
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
//Definindo as rotas
const router = express.Router()
router.get('/',(requestAnimationFrame,req) => res.json({message:'Funcionando!'}))
app.use('/',router)