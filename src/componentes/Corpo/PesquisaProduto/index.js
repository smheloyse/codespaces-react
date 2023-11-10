import styled from "styled-components";
import vestido from "../../../imagens/vestido.png"
import { roupas } from "./dados";

const PesquisaProdutoStyled = styled.section `
    display: flex;
    flex-direction: column;
`

const Input = styled.input `

`

const CardProduto = styled.div `
    display: flex;
`

const CardInfoProduto = styled.div `
    display: flex;
    flex-direction: column;
`

function PesquisaProduto () {
    return (
        <PesquisaProdutoStyled> 
            <h1> Pesquise o Produto </h1>
            <Input/>
            <CardProduto> {
                roupas.map ((roupa)
                )}

                <img src ={roupas} alt= "vestido" />
                <CardInfoProduto> 
                    <h2> Nome </h2>
                    <h3> Preço </h3>
                    <h3> Tamanho </h3>
                </CardInfoProduto>
            </CardProduto>

        </PesquisaProdutoStyled>
    )
}

export default PesquisaProduto;
