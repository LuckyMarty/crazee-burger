import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme';

export default function PrimaryButton(
    {
        label,
        Icon
    }
) {
    return (
        <PrimaryButtonStyled>
            {label} {Icon && Icon} 
        </PrimaryButtonStyled>
    )
}


const color = theme.colors;
const spacing = theme.spacing;

const PrimaryButtonStyled = styled.button`
    border-radius: ${theme.borderRadius.round};
    border: 1px solid ${color.primary_burger};
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
`;