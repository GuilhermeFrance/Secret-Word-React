import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
      <div className="container">
    <div className="myTitle">
      <h1>SECRET</h1>
      <h1 className="title2">WORD</h1>
    </div>
      </div>
        <p className="click">Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen