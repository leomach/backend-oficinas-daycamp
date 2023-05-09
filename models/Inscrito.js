const mongoose = require('mongoose')

const InscritoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    oficina: {
        type: String,
        required: true
    }
})

const Inscrito = mongoose.model("Inscrito", InscritoSchema)

module.exports = Inscrito