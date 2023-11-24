import styled from "styled-components";
import BarraNavegacao from "./BarraNavegacao";
import SecaoPrincipal from "./SecaoPrincipal/SecaoPrincipal.js";


const CorpoStyled = styled.div`
  display:flex;
  width: 100vw;
  min-height: 80vh;
  background-color: #fce1dd;  
`
function  Corpo (){
  return (
    <CorpoStyled>
      <BarraNavegacao/>
      <SecaoPrincipal/>
    </CorpoStyled>
  )
}
export default Corpo;