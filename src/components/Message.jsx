import React, { Component } from "react";
import "../App.css";
import EditMessage from "./EditMessage";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: " ",
      active: false,
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let message = [...this.state.newMessage];

    this.setState({
      newMessage: this.state.newMessage,
    });
    this.props.addMessage(message);
    this.setState({
      newMessage: "",
    });
  };

  handleToggle = () => {
    console.log("toggle");
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    console.log(this.props.message, "messages");
    const css = this.state.active;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.newMessage}
            name="newMessage"
          />
          <input value="submit" type="submit" name="submit" />
        </form>
        {this.props.message
          ? this.props.message.map((messages) => {
              //   console.log(messages);
              return (
                <div id="message">
                  <h4
                    className={css ? "strikeThrough" : "show"}
                    key={messages.id}
                  >
                    {messages}
                  </h4>
                  <button onClick={this.handleToggle}>X</button>

                  <EditMessage id={messages.id} messages={messages} />
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default Message;
