import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

export default function TextTextInput(
    {
        value,
        onChange,
        Icon,
        className,
        ...restProps
    }
) {
    return (
        <TextInputStyled>
            {Icon && Icon}
            <input
                value={value}
                onChange={onChange}
                type="text"
                {...restProps}
            />
        </TextInputStyled>
    )
}


const color = theme.colors;
const spacing = theme.spacing;

const TextInputStyled = styled.div`
    border-radius: ${theme.borderRadius.round};
    border: none;

    padding: ${spacing.md};

    background-color: ${color.white};
    display: flex;
    align-items: center;
    gap: ${spacing.sm};

    >input {
        width: 100%;
        border: none;
    }
`