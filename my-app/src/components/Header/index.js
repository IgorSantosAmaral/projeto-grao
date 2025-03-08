import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header;