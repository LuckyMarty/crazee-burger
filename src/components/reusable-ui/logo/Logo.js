import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'
import img_logo from './assets/F03 logo-orange.png'


export default function Logo() {
    return (
        <LogoStyled>
            Crazee
            <img src={img_logo} alt="Logo" />
            Burger
        </LogoStyled>
    )
}

const font = theme.fonts;
const color = theme.colors;
const spacing = theme.spacing;

const LogoStyled = styled.div`
    font-family: 'Amatic SC';
    font-size: 110px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${color.primary_burger};
    
    >img {
        height: 150px;
        vertical-align: middle;
        margin: ${spacing.md};
    }
`