import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Corpo from './componentes/Corpo/Corpo';
import styled from 'styled-components';

const AppStyled = styled.div `
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <AppStyled> 
        <Cabecalho/>
        <Corpo/>  
    </AppStyled>
  );
}
export default App;

