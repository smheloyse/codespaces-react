import styled from "styled-components";

const CorpoApp = styled.div`
.App {
    width: 100vw;
    height: 100vh;
    background-color: #fce1dd;
  }
  
  .Esq {
    height: 80vh;
    width: 30%;
    background-color: #f6c3bd;
    padding: 20px;
    float: left;
  }
  
  .Corposite {
    display: flex;
  }
  
  .Principal {
    height: 100%;
    width: 100%;
  }
`

function Corpo () {
return (
    <CorpoApp> </CorpoApp>
)}