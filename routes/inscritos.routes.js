const express = require('express');
const { findAllInscritos, findById, createInscrito } = require('../controllers/inscritos.controller');

const router = express.Router();

router.get('/', findAllInscritos)
router.get('/:id', findById)
router.post('/', createInscrito)

module.exports = router