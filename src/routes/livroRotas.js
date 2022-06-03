const express = require('express')  // Dependências

const controller = require('../controllers/livroController')  // importar nossa controller

const router = express.Router() // nossas rotas

router.get('/biblioteca', controller.findAllEbooks) // primeiro get, onde /biblioteca é o nosso endpoint.
router.get("/", controller.findOneEbookByTitle)

router.get('/:id', controller.findById)

module.exports = router

