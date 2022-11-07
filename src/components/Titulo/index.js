import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100vw;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.font || '18px'};
    text-align: ${props => props.align || 'center'};
    margin: 0;
`