global.db = require('./db')
const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definindo as rotas
const router = express.Router()
router.get('/',(req,res) => res.json({message:'Funcionando!'}))
app.use('/',router)
// Codigo para iniciar o servidor
app.listen(port)
console.log('Api Funcionando !')

// GET /clientes
router.get('/clientes', (req, res) => global.db.findCustomers((err, docs) => {
    if(err) res.status(500).json(err)
    else res.json(docs)
}))