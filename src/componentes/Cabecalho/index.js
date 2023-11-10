import Login from './Login';
import Logotipo from './Logotipo';
import Menu from "./Menu";
import styled from 'styled-components';

const CabecalhoApp = styled.header`   
   background-color: #F5CDF1;
   height: 20vh;
   width: 100vw;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: calc(10px + 2vmin);
   color: white;   
`

function Cabecalho() {

   return (
      <CabecalhoApp>
         <Logotipo />
         <Menu />
         <Login />
      </CabecalhoApp>
   )
}
export default Cabecalho;