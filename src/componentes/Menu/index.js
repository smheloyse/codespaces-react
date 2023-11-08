import styled from "styled-components";
const listaMenu = ["Início", "Unidades", "Fale Conosco", "Informações"];

const MenuCabecalho = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 60%;
    padding: 0 10px;

    .Menu-iten{
    display: flex;
    }
    `
    const ItemMenu = styled.li`
    list-style-type: none;
    float: center;
`
    
function Menu() {

    return(
        <MenuCabecalho> 
            {listaMenu.map((item) => (
            <ItemMenu> {item} </ItemMenu>
            ))}
        </MenuCabecalho>
    );
}

export default Menu