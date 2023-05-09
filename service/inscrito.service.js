const Inscrito = require('../models/Inscrito');

const createService = (body) => Inscrito.create(body)
const findAllService = () => Inscrito.find()
const findByIdService = (id) => Inscrito.findById(id)

module.exports = {
    createService,
    findAllService,
    findByIdService
}