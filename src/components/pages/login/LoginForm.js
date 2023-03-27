import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';

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
        <form action='submit' onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre prénom..." required></input>
            <button>Accédez à votre espace</button>
        </form>
    )
}


/**
 * 4 méthodes pour ajouter de style à un composants
 * 1. inline style
 * 2. object style
 * 3. module CSS (avec className)
 * 4. global style (index.css)
 */