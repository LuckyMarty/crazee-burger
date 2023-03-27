import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

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
            <h1>Bienvenu chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre prénom..." required></input>
            <button>Accédez à votre espace</button>
            <Link to="/order">Vers la page OrderPage</Link>
        </form>
    )
}
