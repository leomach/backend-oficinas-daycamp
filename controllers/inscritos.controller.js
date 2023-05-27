const inscritoService = require('../service/inscrito.service')

const findAllInscritos = async (req, res) => {
    const inscritos = await inscritoService.findAllService()

    if (inscritos.length === 0) {
        return res.status(400).send({ message: 'Nenhum inscrito registrado' })
    }

    res.send(inscritos)
}

const findById = async (req, res) => {
    const id = req.params.id

    const inscrito = await inscritoService.findByIdService(id)
    if (!inscrito) {
        return res.status(400).send({ message: 'Inscrito não encontrado' })
    }

    res.send(inscrito)
}

const createInscrito = async (req, res) => {
    let { nome, oficina } = req.body

    const inscritos = await inscritoService.findAllService()
    let inscritosOficina = inscritos.filter(inscrito => inscrito.oficina === oficina)
    if (inscritosOficina.length === 33 || inscritosOficina.length > 33) {
        return res.status(400).send({ message: "Não temos vagas para essa oficina..." })
    }
    
    const inscrito = await inscritoService.createService(req.body)
    if (!inscrito) {
        return res.status(400).send({ message: "Erro de criação de inscrito" })
    }
    res.status(200).send({
        message: 'Requisição completa',
        inscrito: {
            nome,
            oficina
        }
    })
}

module.exports = {
    findAllInscritos,
    findById,
    createInscrito
}
