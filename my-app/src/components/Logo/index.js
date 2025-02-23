import logo from '../../imgs/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    align-items: center;
`

const LogoImage = styled.img`
    margin-right: 10px;
    width: 80px;
    height: 80px;
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