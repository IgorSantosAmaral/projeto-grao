import { graos } from './dadosNovidades';
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import imagemGrao from '../../imgs/soja.jpg'
import styled from 'styled-components';

const NovidadesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;

`

const NovosGraosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-flow: row wrap;
    gap: 50px;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function Novidades() {
    return (
        <NovidadesContainer>
            <Titulo
                cor="rgb(137, 96, 50)"
                tamanhoFonte="36px"
                alinhamento ="center"
            >Novidades
            </Titulo>
            <NovosGraosContainer>
                {graos.map( grao => (
                    <img src={grao.src}/>
                ))}
            </NovosGraosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por..."
                subtitulo="Soja"
                descricao="A soja é um grão versátil e nutritivo que tem grande potencial para o mercado, seja para a produção de alimentos, biocombustíveis, ou para a criação animal."
                img={imagemGrao}
            />
            <CardRecomenda
                titulo="Talvez você se interesse por..."
                subtitulo="Sorgo"
                descricao="O sorgo é um cereal que tem vários benefícios para o mercado, como ser uma fonte de energia para animais, matéria-prima para etanol e ser uma cultura de baixo custo."
                img={imagemGrao}
            />
        </NovidadesContainer>
    )
}

export default Novidades