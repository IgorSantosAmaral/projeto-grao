import perfil from '../../imgs/perfil.svg';
import sacola from '../../imgs/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;

    @media (max-width: 768px) {
        margin-right: 20px;
    }

    @media (max-width: 480px) {
        width: 20px;
    }
`

const Icones = styled.ul`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: center;
        margin-top: 20px;
    }
`

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <Icones>
            { icones.map( (icone) =>(
                <Icone><img src={icone}></img></Icone>
            )) }
        </Icones>
    )
}

export default IconesHeader;