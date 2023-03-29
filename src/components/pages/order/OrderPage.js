import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Main from './Main';
import NavBar from './NavBar';

export default function OrderPage() {
    // State

    // Comportement
    
    // Affichage
    return (
        <OrderPageStyled>
            <NavBar />
            <Main />
        </OrderPageStyled>
    )
}


const OrderPageStyled = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 10fr;
`;