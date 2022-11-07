import styled from 'styled-components';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const Icone = styled.li`
    margin-right: 20px;
    width: 25px;
    cursor: pointer;
`

const icones = [perfil, sacola]

const IconesHeader = () => {
    return (
        <Icones>
            { icones.map((icone) => (
              <Icone><img src={icone} alt='icones'/></Icone>
            )) }
        </Icones>
    )
}

export default IconesHeader;