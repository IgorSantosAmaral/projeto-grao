import logo from '../../imgs/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: center;
        font-size: 24px;
    }

    @media (max-width: 480px) {
        font-size: 18px;
    }
`

const LogoImage = styled.img`
    margin-right: 10px;
    width: 80px;
    height: 80px;

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }

    @media (max-width: 480px) {
        width: 50px;
        height: 50px;
    }
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt='logo'/>
            <p>Projeto <strong>Grão</strong></p>

        </LogoContainer>
    )
}

export default Logo;