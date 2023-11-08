import lupa from "../../imagens/lupa.svg"
import ic from "../../imagens/ic.png"
import styled from "styled-components";

const LoginApp = styled.div`
    .imagem {
    width: 40px;
    }
`

const listaImagens = [lupa, ic]

function Login() {
    return (
        <LoginApp> {
            listaImagens.map((imagem) => (
                <img src={imagem} className='imagem' alt="lupa"/>
            ))}
        </LoginApp>
    );
}

export default Login
