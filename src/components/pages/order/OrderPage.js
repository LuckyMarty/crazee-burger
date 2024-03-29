import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme';
import Main from './Main/Main';
import NavBar from './NavBar/NavBar';

export default function OrderPage() {
    // State

    // Comportement
    
    // Affichage
    return (
        <OrderPageStyled>
            <div>
                <NavBar />
                <Main />
            </div>
        </OrderPageStyled>
    )
}

const color = theme.colors;

const OrderPageStyled = styled.div`
    background-color: ${color.primary};
    height: 100vh;

    >div {
        height: 95vh;
        display: grid;
        grid-template-rows: 1fr 10fr;

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 1400px;
        width: 100%;

        border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
        overflow: hidden;
    }
`;