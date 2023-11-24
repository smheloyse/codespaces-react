import CarrosselBootStrap from "./Carrossel.js";
import PesquisaProduto from "./PesquisaProduto/PesquisaProduto.js";
import styled from "styled-components";

const SecaoPrincipalStyled = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    width: 80vw;
    align-items: center;
`

function SecaoPrincipal() {
    return (
        <SecaoPrincipalStyled>
            <CarrosselBootStrap />
            <PesquisaProduto />
        </SecaoPrincipalStyled>
    )
}
export default SecaoPrincipal;