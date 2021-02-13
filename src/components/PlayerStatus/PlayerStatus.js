import React, { Component } from 'react';
import ChoosePlayer from '../ChoosePlayer/ChoosePlayer';
import { Fireworks } from 'fireworks/lib/react';

import './PlayerStatus.css';

class PlayerStatus extends Component{

    handleSetPlayer(e){
      this.props.setPlayer(e)
    }

    renderWinnerHTML(){

//fireworks
          let fxProps = {
            count: 3,
            interval: 500,
            bubbleSizeMaximum: 15,
            bubbleSpeedMaximum: 25,
            colors: ['#b388eb', '#c0fdff', '#ff5d8f'],
            calc: (props, i) => ({
              ...props,
              x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
              y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
            })
          }

      if(this.props.winner){
        return(
          <div className="winnerDiv">
          <h2 className = "winner">Winner is: {this.props.winner}</h2>
           <Fireworks {...fxProps}/>
          </div>
        )

      } else {
        return this.props.player ?

        <h2 className = "nextPlayer"> Next Player is: {this.props.player}</h2> :

        <ChoosePlayer player={(e) => this.handleSetPlayer(e)}/>
      }
    }

  render(){


    return(<div>{this.renderWinnerHTML()}</div>)

  }
}

export default PlayerStatus;