import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.counter);
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button onClick={this.props.increment}>add</button>
        <button onClick={this.props.minus}>subtract</button>
        <button onClick={this.props.reset}>reset</button>
        <button onClick={this.props.upTwo}>up</button>
      </div>
    );
  }
}

export default Counter;
