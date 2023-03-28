import React, { useState } from 'react'
import styled from 'styled-components';
import Logo from '../../logo/Logo';
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
    background-image: url('${img_bg}');
    background-size: cover;
    background-position: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
