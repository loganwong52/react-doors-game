import React from 'react'
// import { useState } from "react"
import Door from "./Door"
import { Component } from 'react'
// import { render } from '@testing-library/react'

// function Game(props) {
//   // states
//   const [prizeDoor, /*setPrizeDoor*/] = useState(Math.floor(Math.random() * props.numDoors) + 1)
//   const [result, setResult] = useState(null)

//   // events
//   const updateResult = (door) => {
//     if (result !== null)
//       return

//     setResult(door === prizeDoor)
//   }

//   const startNewGame = () => {
//     window.location.reload();
//   }

//   // renders
//   const renderDoors = () => {
//     let doorElements = []
//     for (let i = 1; i <= props.numDoors; i++) {
//       doorElements.push(
//         <Door key={i}
//           number={i}
//           isPrizeDoor={i === prizeDoor}
//           updateResult={updateResult} />
//       )
//     }
//     return doorElements
//   }

//   const renderResult = () => {
//     if (result === null)
//       return ""

//     return (
//       result
//         ? <p className="result-win">You win!!!</p>
//         : <p className="result-lose">You lose!!</p>
//     )
//   }

//   return (
//     <div className="center-container">
//       <h3>Choose a door:</h3>
//       <div id="door-container">
//         {renderDoors()}
//       </div>
//       <div>
//         <button className="btn" onClick={startNewGame}>New Game</button>
//       </div>
//       <div>
//         {renderResult()}
//       </div>
//     </div>
//   )
// }

///////////////////////////////////////////////

class Game extends Component {
  // states
  state = {
    prizeDoor: Math.floor(Math.random() * this.props.numDoors) + 1,
    result: null
  }
  // true result is you won
  // false result is you lost

  // Calls the setState method to update the state value 'result'
  updateResult = (door) => {
    if (this.state.result !== null)
      return

    let newResultState = door === this.state.prizeDoor
    this.setState({ result: newResultState })
  }

  // Reloads the window. Called when the New Game btn is pressed
  startNewGame = () => {
    window.location.reload();
  }

  // Loop from 1 to 3, 'populating' the list with Door elements to be rendered
  renderDoors = () => {
    let doorElements = []
    for (let i = 1; i <= this.props.numDoors; i++) {
      doorElements.push(
        <Door key={i}
          number={i}
          isPrizeDoor={i === this.state.prizeDoor}
          result={this.state.result}
          updateResult={this.updateResult} />
      )
    }
    return doorElements

  }

  // renders the message if you won or lost
  renderResult = () => {
    if (this.state.result === null)
      return ""

    return (
      this.state.result
        ? <p className="result-win">You win!!!</p>
        : <p className="result-lose">You lose!!</p>
    )
  }

  // renders the 3 doors, New Game button, and message
  render() {
    return (
      <div className="center-container">
        <h3>Choose a door:</h3>
        <div id="door-container">
          {this.renderDoors()}
        </div>
        <div>
          <button className="btn" onClick={this.startNewGame}>New Game</button>
        </div>
        <div>
          {this.renderResult()}
        </div>
      </div>
    )
  }

}

export default Game;