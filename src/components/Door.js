import React from 'react'
// import { useState } from "react";
import GiftImage from "../images/gift.png"
import { Component } from "react" // we need to import Component

// Function-based component version
// function Door(props) {
//   // states
//   const [opened, setOpened] = useState(false)

//   // events
//   const toggleDoor = () => {
//     setOpened((prevOpened) => { return !prevOpened })
//     props.updateResult(props.number)
//   }

//   // renders  
//   const getDoorStateStyle = () => {
//     return " " + (opened ? "door-opened" : "door-closed")
//   }

//   const renderImage = () => {
//     return opened && props.isPrizeDoor
//       ? <img id="image-prize" src={GiftImage} alt="prize" />
//       : null
//   }

//   return (
//     <div className={"door " + getDoorStateStyle()} onClick={toggleDoor}>
//       <div>Door {props.number}</div>
//       {renderImage()}
//     </div>
//   )
// }

// export default Door;


////////////////////////////////////////////////
// Class-based component version
class Door extends Component {
  // states
  state = {
    opened: false
  }


  // Changes the opened state value to the opposite of what it is
  toggleDoor = () => {
    let newOpenedState = !this.state.opened
    this.setState({ opened: newOpenedState })
    this.props.updateResult(this.props.number)
  }

  // There are 2 possible classNames: door-opened or door-closed
  getDoorStateStyle = () => {
    return " " + (this.state.opened ? "door-opened" : "door-closed")
  }

  // Renders the prize box image in the door if it's the prizedoor, otherwise, nothing
  renderImage = () => {
    return this.state.opened && this.props.isPrizeDoor
      ? <img id="image-prize" src={GiftImage} alt="prize" />
      : null
  }

  // helper
  renderDoor = () => {
    return (
      <div>
        <div>Door {this.props.number}</div>
        {this.renderImage()}
      </div>
    )
  }

  // renders a single Door element
  // Disable div to be clickable after 1 door is opened
  render() {
    return (
      this.props.result !== null
        ? <div className={"door " + this.getDoorStateStyle()} disabled={true}>
          {this.renderDoor()}
        </div>
        : <div className={"door " + this.getDoorStateStyle()} onClick={this.toggleDoor}>
          {this.renderDoor()}
        </div>

    )
  }
}

export default Door;