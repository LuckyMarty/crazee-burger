import React, { useState } from 'react'
import styled from 'styled-components';
import { LoginForm } from './LoginForm';

export const LoginPage = () => {


    return (
        <LoginPageStyled>
            <LoginForm />
        </LoginPageStyled>
    )
}


const LoginPageStyled = styled.div`
    height: 100vh;
    background-image: url('./assets/F03 burger-background.webp');
`;
