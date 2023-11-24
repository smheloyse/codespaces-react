import styled from "styled-components"

const CardProdutoStyled = styled.div`
    display: flex;
    align-items: center;         
    width: 80%;
    height: clamp(110px,50px + 1vh, 15vh); 
    border-radius:5px;
    background-color: #ffc3ba;
    gap:5vw;
    box-shadow: 
        5px 5px 0px 0px rgba(0, 0, 0, 0.2),
        5px 5px 0px 0px rgba(0, 0, 0, 0.2);
    img{        
        height: 90%;
        margin-left:1%
    }
`

const CardInfoProduto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    height: 90%;
    width: 90%; 
    h2{           
        color: black;
        font-weight: bold;
        font-size: clamp(1em, 1em + 1vw, 2.5em);
    }
    h3{        
        font-size: clamp(0.8em, 0.8em + 1vw, 2em);
    }
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