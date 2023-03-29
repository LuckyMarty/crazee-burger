import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'
import img_logo from './assets/F03 logo-orange.png'


export default function Logo(
    {
        className,
        onClick
    }
) {
    return (
        <LogoStyled>
            <h1 className={className} onClick={onClick}>
                Crazee
                <img src={img_logo} alt="Logo" />
                Burger
            </h1>
        </LogoStyled>
    )
}

const font = theme.fonts;
const color = theme.colors;
const spacing = theme.spacing;

const LogoStyled = styled.div`
    >h1 {
        font-family: 'Amatic SC';
        font-size: ${font.P4};
        font-weight: bold;
        text-transform: uppercase;
        color: ${color.primary_burger};
        margin: 0;
        
        >img {
            height: 60px;
            vertical-align: middle;
            margin: 0 ${spacing.xs};
        }
    }

    .logo-login-page {
        font-size: 110px;

        > img {
            height: 150px;
        }
    }
`