import { useState } from 'react';
import './App.css';

function App() {
  const [character, setCharacter] = useState("???");

  return (
    <>
      <h1 id="Kbu"> Kbu is {character}</h1>
      <button
        class="Character"
        id="Cute" 
        type="button"
        onClick={() => setCharacter("Cute")}
      >Cute</button>

      <button
        class="Character"
        id="Beautiful"
        type="button"
        onClick={() => setCharacter("Beautiful")}
      >Beautiful</button>

      <button
        class="Character"
        id="Intelligent"
        type="button"
        onClick={() => setCharacter("Intelligent")}
      >Intelligent</button>

      <button
        class="Character"
        id="Friendly"
        type="button"
        onClick={() => setCharacter("Friendly")}
      >Friendly</button>

      <button
        class="Character"
        id="Honest"
        type="button"
        onClick={() => setCharacter("Honest ")}
      >Honest</button>            
    </>
  );
}

export default App;
