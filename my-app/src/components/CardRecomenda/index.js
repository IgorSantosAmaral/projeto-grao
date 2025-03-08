import styled from "styled-components"
import { Titulo } from "../Titulo"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 40px auto;
    width: 600px;
    padding: 25px 20px;
    justify-content: space-around;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 15px;
        max-width: 400px;
    }

    @media (max-width: 480px) {
        margin: 20px auto;
        padding: 10px;
    }
`

const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`

const Descricao = styled.p`
    max-width: 300px;
`

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgGrao = styled.img`
    width: 150px;
`

function CardRecomenda({titulo, subtitulo, descricao, img}) {
    return (
        <Card>
            <div>
                <Titulo tamanhoFonte="16px" cor="rgb(137, 96, 50)" alinhamento="left">{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgGrao src={img} alt={`Imagem de ${titulo}`}/>
                <Botao>Saiba mais</Botao>
            </div>
        </Card>
    )
}

export default CardRecomenda