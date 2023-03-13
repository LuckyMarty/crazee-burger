import { useState } from "react";

const App = () => {
  // state (état, données)


  // Comportements
  const handleSubmit = () => {

  }


  // Affichage (render)
  return <div>
    <h1>Bienvenu chez nous !</h1>
    <h2>Connectez vous</h2>

    <form>
      <input placeholder="Entrez votre prénom..." required></input>
      <button onSubmit={handleSubmit}>Accédez à votre espace</button>
    </form>
  </div>
}

export default App;
