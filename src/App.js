import React from 'react'
import './App.css';
import Game from "./components/Game"
import { Component } from 'react'

// function App() {
//   return (
//     <div className="App">
//       <Game numDoors={3} />
//     </div>
//   );
// }

class App extends Component {

  //render
  render() {
    return (
      <div className="App">
        <Game numDoors={3} />
      </div>
    )
  }
}

export default App;
