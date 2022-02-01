import React, { Component } from "react";
// import ReactDOM from "react-dom"
import { makeObservable, observable, action } from "mobx";
import { observer } from "mobx-react";

// Model the application state.
class TimerView extends Component {
  secondsPassed = 0;
  constructor() {
    super();
    makeObservable(this, {
      secondsPassed: observable,
      increment: action,
    });
  }

  increment = () => {
    this.secondsPassed += 1;
    // this.secondsPassed++
    console.log(this.secondsPassed, "button clicked");
  };

  render() {
    console.log("render called", this.secondsPassed);
    return (
      <div>
        <h1>{this.secondsPassed}</h1>
        <button onClick={this.increment}>Incremenet Button</button>
      </div>
    );
  }
}

export default observer(TimerView);
