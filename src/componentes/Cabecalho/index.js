import Login from '../Login';
import Logotipo from '../Logotipo';
import Menu from "../Menu";
import styled from 'styled-components';

const CabecalhoApp = styled.header`
   .App-header {
      background-color: #F5CDF1;
      min-height: 20vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: white;
   }
`

function Cabecalho() {

   return (
      <CabecalhoApp className="App-header">
      <Logotipo />
      <Menu />
      <Login />
      </CabecalhoApp>
   )
}
export default Cabecalho