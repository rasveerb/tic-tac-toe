import React, {Component} from 'react';
import './App.css';
import PlayerStatus from './components/PlayerStatus/PlayerStatus';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      board : Array(9).fill(null),
      player: null,
      winner: null,
    }
  }


  checkWinner(){
    let winningCombos = [
      //rows
      ["0","1","2"],
      ["3","4","5"],
      ["6","7","8"],

      //columns
      ["0","3","6"],
      ["1","4","7"],
      ["2","5","8"],

      //diagnols
      ["0","4","8"],
      ["2","4","6"]
    ]

    for(let index = 0; index < winningCombos.length; index++){
      const [a, b, c] = winningCombos[index];

      if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){
        this.setState({
          winner: this.state.player,
        });

      }
    }
  }

  handleClick(index){
    if(this.state.player && !this.state.winner) {

      let newBoard = this.state.board;

      if(this.state.board[index] === null ) {
        newBoard[index] = this.state.player

        this.setState({

          board: newBoard,

          player: this.state.player === "X" ? "O" : "X"
        })

        this.checkWinner()
      }
    }

  }

  setPlayer(player){
    this.setState({ player }) //instead of player:player - because assigning same thing
  }

  renderBoxes(){
    return this.state.board.map(

      (boxValue, index) =>

        <div className="box"

          key={index}

          onClick={(e) => this.handleClick(index)}>

          {boxValue}

        </div>
      )
  }

  resetGame(){
    this.setState({
      player: null,
      winner: null,
      board: Array(9).fill(null)
  })
}

  render(){
    return (

      <div className="container">

        <h1 className={!this.state.player ? "gameTitle" : "playerTitle"}> TIC TAC TOE </h1>

        <PlayerStatus player={this.state.player} setPlayer={(e)=>{this.setPlayer(e)}} winner ={this.state.winner}/>

        <div className = "boardDisplay">

            <div className={!this.state.winner ? "gameBoard" : "winnerBoard"}>

              {this.renderBoxes()}

            </div>

            <button className = "playAgain" disabled={!this.state.winner} onClick={() => this.resetGame()}> Play Again </button>

        </div>

      </div>
    );
  }
}

export default App;