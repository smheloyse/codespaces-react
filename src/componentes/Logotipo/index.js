import styled from 'styled-components';
import logo from '../../imagens/logolj.png'

const LogoApp = styled.div `
    .App-logo {
    height: 10vh;
    margin-right: 10px;
  }
`

function Logotipo(){
    return( 
        <LogoApp> 
            <img src={logo} className="App-logo" alt="logo" />
            <p> Loja de Roupas </p>
        </LogoApp>
    );
}
export default Logotipo