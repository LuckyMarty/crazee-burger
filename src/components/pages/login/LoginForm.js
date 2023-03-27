import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    // State
    const [inputValue, setInputValue] = useState("")


    // Comportement
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Bonjour ${inputValue}`);
        setInputValue("");
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    
    return (
        <form action='submit' onSubmit={handleSubmit}>
            <h1>Bienvenu chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre prénom..." required></input>
            <button>Accédez à votre espace</button>
            <Link to="/order">Vers la page OrderPage</Link>
        </form>
    )
}
