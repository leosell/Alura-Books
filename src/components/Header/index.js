import Logo from '../Logo';
import OpcoesHeader from '../Opcoes Header';
import IconesHeader from '../Icones Header';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header;