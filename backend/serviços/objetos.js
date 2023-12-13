const fs = require("fs")

const objetos = JSON.parse( fs.readFileSync("./dataBase/objetos.json") )

function getTodosProdutos() {
    return objetos
}

function getObjetoPorId(id) {

    const produtoFiltrado = objetos.filter( objeto => objeto.id === id )[0]
    return produtoFiltrado
}

function insereProduto(prdutoNovo) {

    const novaListaDeProdutos = [ ...objetos, produtoNovo ]

    fs.writeFileSync("./dataBase/objetos.json", JSON.stringify(novaListaDeProdutos))
}

function modificaObjeto(modificacoes, id) {
    const indiceModificado = objetos.findIndex(objeto => objeto.id === id)

    const conteudoMudado = { ...objetos[indiceModificado], ...modificacoes }

    objetos[indiceModificado] = conteudoMudado

    fs.writeFileSync("./dataBase/objetos.json", JSON.stringify(objetos))
}

function deletaProdutoPorId(id) {

    const produtosFiltrados = objetos.filter( objeto => objeto.id !== id )
    fs.writeFileSync("./dataBase/objetos.json", JSON.stringify(produtosFiltrados))
}

module.exports = {
    getTodosProdutos,
    getProdutoPorId,
    insereProduto,
    modificaProduto,
    deletaProdutoPorId
}