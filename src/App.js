import React, { Component } from "react";

import "./App.css";
import Counter from "./components/Counter";
import Message from "./components/Message";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "",
    };
  }

  editMessageFunc = (message) => {
    let allMessages = this.state.message;
    console.log(allMessages, "edit message");
  };

  // interval = undefined;

  // componentDidMount() {
  //   let interval = setInterval(this.increment, 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  addMessage = (newMessage) => {
    console.log(newMessage, "newMessage");
    let updateMessages = [...this.state.message, newMessage];

    this.setState({
      message: updateMessages,
    });
  };

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrease = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };

  upTwo = () => {
    this.setState({
      counter: this.state.counter + 2,
    });
  };

  render() {
    return (
      <div>
        <Counter
          counter={this.state.counter}
          increment={this.increment}
          minus={this.decrease}
          reset={this.reset}
          upTwo={this.upTwo}
        />
        <Message
          message={this.state.message}
          addMessage={this.addMessage}
          editMessageFunc={this.editMessageFunc}
        />
      </div>
    );
  }
}

export default App;
