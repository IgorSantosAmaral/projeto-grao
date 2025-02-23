import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react';
import { graos } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #0b5202 35%, #28993b 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;  
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 250px;
    }

    &:hover {
        border: 1px solid white;
    }  
`

function Pesquisa() {
    const [ graosPesquisados, setGraosPesquisados ] = useState([])

    
    return (        
        <PesquisaContainer>
            <Titulo>Está em busca de qualidade?</Titulo>
            <Subtitulo>Escolha o que deseja em nosso site.</Subtitulo>
            <Input
                placeholder="Escreva o nome do produto que deseja"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = graos.filter(grao => grao.nome.includes(textoDigitado))
                    setGraosPesquisados(resultadoPesquisa)
                }}
            />
            { graosPesquisados.map( grao => (
                <Resultado>
                    <img src={grao.src}/>
                    <p>{ grao.nome }</p>
                </Resultado>
            )) }
        </PesquisaContainer>
    )
}

export default Pesquisa