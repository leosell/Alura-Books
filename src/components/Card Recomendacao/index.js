import styled from "styled-components"
import { Titulo } from "../Titulo"

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    width: 100vw;
`

const Button = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;

    &:hover {
        cursor: pointer;
    }
`

const SubTitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const Descricao = styled.p`
    max-width: 300px;
`

const ImgLivro = styled.img`
    width: 150px;
`

const CardRecomendacao = ({titulo, subTitulo, descricao, img}) => {
    return (
        <Card>
            <div>
                <Titulo font='16px' cor='#EB9B00' align='left'>{titulo}</Titulo>
                <SubTitulo>{subTitulo}</SubTitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src={img} />
                <Button>Saiba Mais!</Button>
            </div>
        </Card>
    )
}

export default CardRecomendacao