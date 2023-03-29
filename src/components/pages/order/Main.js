import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme';

export default function Main() {
    return (
        <MainStyled>
            Main
        </MainStyled>
    )
}


const MainStyled = styled.main`
    background-color: ${theme.colors.background_white};
    box-shadow: 0 8px 20px 8px rgba(0,0,0,.2) inset;
`;