import { useRef, useState } from "react";
import "./Game.css";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {

  const [letter, setLetter] = useState("")
  const letterInputRef = useRef(null)
  const handleSumbit = (e) => {
    e.preventDefault()

    verifyLetter(letter)
    
    setLetter("")

    letterInputRef.current.focus()

  }

  return (
    <div className="game">
      <p className="point">
        <span className="points">PONTUAÇÃO: <span className="score">{score}</span></span>
      </p>
      <div className="container">
      <h1>ADVINHE A PALAVRA:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p className="header-item">Você ainda tem <span className="guessses">{guesses}</span> tentativa(s).</p>
      </div>
      <div className="wordContainer">
       {letters.map((letter, i) => (
        guessedLetters.includes(letter) ? (
          <span key={i} className="blankSquare">
            {letter}
          </span>
        ) : (
          
          <span key={i} className="blankSquare"></span>
        )
       ))}
      </div>
      <div className="container-bottom">
      <div className="letterContainer">
        <p className="tryLetter">TENTE ADVINHAR UMA PALAVRA:</p>
        <form onSubmit={handleSumbit}>
          <input
           type="text"
           name="letter" 
           maxLength="1" 
           required 
           onChange={(e) => setLetter(e.target.value)} 
           value={letter}
           ref={letterInputRef}
           />

          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContent">
        <p>Letras já utilizadas:</p>
        <br/>
        {wrongLetters.map((letter, i) => (
          <span className="wrongWords" key={i}>{letter} - </span>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Game;
