import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'

export default function Input(
    {
        value,
        onChange,
        Icon,
        className,
        ...restProps
    }
) {
    return (
        <InputStyled>
            {Icon && Icon}
            <input
                value={value}
                onChange={onChange}
                type="text"
                {...restProps}
            />
        </InputStyled>
    )
}


const color = theme.colors;
const spacing = theme.spacing;

const InputStyled = styled.div`
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