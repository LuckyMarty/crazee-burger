import React, { useState } from 'react'
import styled from 'styled-components';
import Logo from '../../reusable-ui/logo/Logo';
import { LoginForm } from './LoginForm';
import img_bg from './assets/F03 burger-background.webp';

export const LoginPage = () => {


    return (
        <LoginPageStyled>
            <Logo />
            <LoginForm />
        </LoginPageStyled>
    )
}


const LoginPageStyled = styled.div`
    height: 100vh;
    background: url('${img_bg}') rgba(0,0,0,.75);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
