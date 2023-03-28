import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../theme';
import { BsPersonCircle } from 'react-icons/bs';
import { IoChevronForward } from 'react-icons/io5';

export const LoginForm = () => {
    // State
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();


    // Comportement
    const handleSubmit = (event) => {
        event.preventDefault();
        setInputValue("");
        navigate(`order/${inputValue}`)
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <LoginFormStyled action='submit' onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <hr />
            <h2>Connectez-vous</h2>
            <div>
                <div className='input-container'>
                    <BsPersonCircle />
                    <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre prénom..." required />
                </div>
                <button>Accédez à votre espace <IoChevronForward /> </button>
            </div>
        </LoginFormStyled>
    )
}



const color = theme.colors;
const font = theme.fonts;
const spacing = theme.spacing;

const LoginFormStyled = styled.form`
    text-align: center;

    h1,
    h2 {
        font-family: 'Amatic SC';
        color: ${color.white};
    }

    h1 {
        font-size: ${font.P5};
    }

    h2 {
        font-size: ${font.P4};
    }
    
    hr {
        width: 400px;
        height: 3px;
        border: none;
        background-color: ${color.orange};
    }

    >div {
        display: inline-flex;
        flex-direction: column;
        gap: ${spacing.md};
        width: 400px;

        >button,
        >div,
        >div>input {
            border-radius: ${theme.borderRadius.round};
            border: none;
        }

        >button,
        >div {
            padding: ${spacing.md};
        }

        >button {
            color: ${color.white};
            background-color: ${color.primary_burger};
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;

            &:hover {
                background-color: ${color.white};
                color: #000;
            }
        }

        > div {
            background-color: ${color.white};
            display: flex;
            align-items: center;
            gap: ${spacing.sm};

            >input {
                width: 100%;
            }
        }
    }
`


/**
 * 4 méthodes pour ajouter de style à un composants
 * 1. inline style
 * 2. object style
 * 3. module CSS (avec className)
 * 4. global style (index.css)
 */