import styled from "styled-components";
import { roupas } from "./dados.js";
import { useState } from "react";
import CardProduto from "./CardProduto.js";

const PesquisaProdutoStyled = styled.section `
    width: 80vw;
    height: calc(100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3vh;
    h1{
        font-size:4vw;
        margin: 0;
        padding: 0;
    }    
`

const Input = styled.input `

`

const Titulo = styled.h1`
    color : ${props => props.cor || 'purple'};
    font-size: ${props => props.tamanhoFonte || '20px'};
    font-weight: bold;
`


function PesquisaProduto () {
    const [roupasEncontradas, setRoupasEncontradas]=useState([]);

    return (
        <PesquisaProdutoStyled> 
            <Titulo> Pesquise o Produto: </Titulo>

            <Input
                onChange={
                    evento => {
                        const textoDigitado = evento.target.value;
                        const resultadoBusca = roupas.filter(roupas => roupas.nome.includes(textoDigitado))
                        setRoupasEncontradas(resultadoBusca)
                    }
                }
            />

            {
                roupasEncontradas.map (roupas=> (
                    <CardProduto 
                    nome = {roupas.nome}
                    valor = {roupas.valor}
                    tamanho = {roupas.tamanho}
                    />  

                ))
            }

        </PesquisaProdutoStyled>
    )
}

export default PesquisaProduto;
