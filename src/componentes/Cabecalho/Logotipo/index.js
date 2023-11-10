import styled from 'styled-components';
import logo from '../../../imagens/logolj.png'

const LogoApp = styled.div `

    margin-top:9px;
    margin-bottom:5px;
    .App-logo {
        height: 5em;
        margin-right: 10px;
    }

    p{
        margin:0;
        font-size:1em;
        font-family: Georgia, serif;
        text-align: center;
        color: #ae524b;
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
export default Logotipo;