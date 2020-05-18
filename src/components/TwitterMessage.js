import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { message: '' };
  }

  saveMessage = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let remainingChars = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.saveMessage} value={this.state.message} />
        <p>Remaining Characters: {remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
