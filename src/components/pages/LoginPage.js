import React, { useState } from 'react'

export const LoginPage = () => {
    // State
    const [inputValue, setInputValue] = useState("")


    // Comportement
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Bonjour ${inputValue}`);
        setInputValue("");
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <h1>Bienvenu chez nous !</h1>
            <br/>
            <h2>Connectez-vous</h2>
            <form action='submit' onSubmit={handleSubmit}>
                <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre prénom..." required></input>
                <button>Accédez à votre espace</button>
            </form>
        </div>
    )
}
