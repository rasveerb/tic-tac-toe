import React, { Component }from 'react';

import './ChoosePlayer.css';

class ChoosePlayer extends Component {

  constructor(props){
    super(props)
    this.state={
      selectPlayer: null,
    }
  }

  handleForm(e){

    e.preventDefault();

    this.props.player(e.target.player.value);

  }

  setPlayer(e){
    this.setState({
      selectPlayer: true
    });
  }

  render(){

    return (
      <form onSubmit={(e) => this.handleForm(e)}>

        <label className ="playerX">
          <div className= "inputDisplay">
            <div className="playerText">Player X</div>
            <input className = "inputX" type="radio" name="player" value="X" onChange={e => this.setPlayer(e)}/>
          </div>
        </label>

        <label className ="playerO">
          <div className= "inputDisplay">
            <div className="playerText">Player O</div>

              <input className = "inputO" type="radio" name="player" value="O" onChange={e => this.setPlayer(e)}/>
          </div>
        </label>

        <button className="startButton" type="submit" disabled={!this.state.selectPlayer}> Start</button>

      </form>)
  }
}

export default ChoosePlayer;