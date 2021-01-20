import React, { Component } from "react";

class EditMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: this.props,
    };
  }
  render() {
    let m = this.state.arr.messages.join("");
    console.log(m, "edit");
    // console.log(this.state.arr.join(), "edit");
    return (
      <div>
        <button>Edit</button>
      </div>
    );
  }
}

export default EditMessage;
