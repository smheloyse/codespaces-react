import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import vestidoflor from '../../../imagens/vestidoflor.png';
import vestverm from '../../../imagens/vestverm.png';
import vestidoverm from '../../../imagens/vestlongo.png';

const CarrosselStyled = styled(Carousel)`
    overflow: hidden;
    height: 80%;
    width: 30%;
    margin-top: 30px;
    margin-bottom: 10px;
    img{
        object-fit: cover;
    }
`

function CarrosselBootStrap(){
    return(
        <CarrosselStyled>  
            <Carousel.Item>
                <img className="d-block w-100"
                src={vestidoflor} alt= ""/>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100"
                src={vestverm} alt= ""/>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100"
                src={vestidoverm} alt= ""/>
            </Carousel.Item>
        
        </CarrosselStyled>
    )
}
export default CarrosselBootStrap;