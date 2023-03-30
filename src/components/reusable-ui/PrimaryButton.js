import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme';

export default function PrimaryButton(
    {
        label,
        Icon,
        className
    }
) {
    return (
        <PrimaryButtonStyled>
            <button className={className}>{label} {Icon && Icon} </button>
        </PrimaryButtonStyled>
    )
}


const color = theme.colors;
const spacing = theme.spacing;

const PrimaryButtonStyled = styled.div`
    button {
        width: 100%;
        border-radius: ${theme.borderRadius.round};
        border: 1px solid ${color.primary};
        padding: ${spacing.md};

        display: flex;
        justify-content: center;
        align-items: center;
        gap: ${spacing.sm};

        background-color: ${color.primary_burger};
        color: ${color.white};
        font-weight: bold;

        &:hover {
            background-color: ${color.white};
            color: #000;
        }
    }

    .add-button {
        border: 1px solid ${theme.colors.primary};
        padding: 12px 26px;
        font-weight: normal;
        
        &:hover {
            background-color: ${theme.colors.white};
        }
    }
`;