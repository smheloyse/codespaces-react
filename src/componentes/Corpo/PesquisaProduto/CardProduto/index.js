import styled from "styled-components"

const CardProdutoStyled = styled.div`
    display: flex;
`

const CardInfoProduto = styled.div`
    display: flex;
    flex-direction: column;
`

function CardProduto({roupas,nome,valor,tamanho}){
    return (
        <CardProdutoStyled>
            <img src={roupas} alt="" />
            <CardInfoProduto>
                <h2> {nome} </h2>
                <h3> {valor} </h3>
                <h3> {tamanho} </h3>
            </CardInfoProduto>
        </CardProdutoStyled>
    )
}
export default CardProduto;