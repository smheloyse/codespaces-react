import styled from "styled-components";
import { roupas } from "./dados";
import { useState } from "react";
import CardProduto from "./CardProduto";

const PesquisaProdutoStyled = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    width: 100%;
`

const Input = styled.input `

`

const Titulo = styled.h1`
    color: ${props => props.corFonte || 'blue'};
`


function PesquisaProduto () {
    const [roupasEncontradas, setRoupasEncontradas]=useState([])

    return (
        <PesquisaProdutoStyled> 
            <Titulo corFonte= 'gray'> Pesquise o Produto </Titulo>

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
