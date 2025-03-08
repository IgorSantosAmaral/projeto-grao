import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react';
import { graos } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #0b5202 35%, #28993b 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    min-height: 270px;
    width: 100%;

    @media (max-width: 768px) {
        padding: 60px 0;
    }

    @media (max-width: 480px) {
        padding: 40px 0;
    }
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

const ResultadoContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 40px;
    gap: 80px;

    @media (max-width: 768px) {
        gap: 40px;
    }

    @media (max-width: 480px) {
        gap: 20px;
    }
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
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

    @media (max-width: 768px) {
        img {
            width: 200px;
        }

        p {
            width: 150px;
        }
    }

    @media (max-width: 480px) {
        img {
            width: 150px;
        }

        p {
            width: 100px;
        }
    }
`

function Pesquisa() {
    const [ graosPesquisados, setGraosPesquisados ] = useState([])

    
    return (        
        <PesquisaContainer>
            <Titulo>Está em busca de qualidade?</Titulo>
            <Subtitulo>Escolha o que deseja em nosso site.</Subtitulo>
            <Input
                placeholder="O que deseja?  ( Ex.: Grao de Milho, ... )"
                onChange={evento => {
                    const textoDigitado = evento.target.value.trim()
                    if (textoDigitado === "") {
                        setGraosPesquisados([]);
                    } else {
                        const resultadoPesquisa = graos.filter(grao => grao.nome.toLowerCase().includes(textoDigitado.toLowerCase()));
                        setGraosPesquisados(resultadoPesquisa);
                    }
                }}
            />
            <ResultadoContainer>
                { graosPesquisados.map( grao => (
                    <Resultado>
                        <img src={grao.src}/>
                        <p>{ grao.nome }</p>
                    </Resultado>
                )) }
            </ResultadoContainer>
        </PesquisaContainer>
    )
}

export default Pesquisa