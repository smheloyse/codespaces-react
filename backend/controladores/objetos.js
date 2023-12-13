const { getTodosProdutos, getProdutoPorId, insereProduto, modificaProduto, deletaProdutoPorId } = require("../serviços/produtos")

function getProdutos(req, res) {
    try {
        const objetos = getTodosProdutos()
        res.send(objetos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function getProduto(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const objeto = getProdutoPorId(id)
            res.send(objeto)
        } else {
            res.status(422)
            res.send("Id inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function postProduto(req, res) {
    try {
        
        console.log(req.body); 
        const produtoNovo = req.body
        if(req.body.nome) {
            insereProduto(produtoNovo)
            res.status(201)
            res.send("Objeto inserido com sucesso")
        } else {
            res.status(422)
            res.send("O campo nome é obrigatório")
        }        
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchProduto(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const body = req.body
            modificaProduto(body, id)
            res.send("Item modificado com sucesso")
        } else {
            res.status(422)
            res.send("Id inválido")
        }       
    } catch(error) {
        res.status(500)
        res.send(error.message) 
    }
}

function deleteProduto(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deletaProdutoPorId(id)
            res.send("Objeto deletado com sucesso")
        } else {
            res.status(422)
            res.send("ID inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

module.exports = {
    getProdutos,
    getProduto,
    postProduto,
    patchProduto,
    deleteProduto
}