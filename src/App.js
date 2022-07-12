import React from 'react'
import './App.css';
import Game from "./components/Game"
import { Component } from 'react'

// Function based component version
// function App() {
//   return (
//     <div className="App">
//       <Game numDoors={3} />
//     </div>
//   );
// }


// Class-based component version
class App extends Component {

  //render the Game
  render() {
    return (
      <div className="App">
        <Game numDoors={3} />
      </div>
    )
  }
}

export default App;
