import React, { Component} from 'react';


class Message extends Component {
  render() {
    const time = new Date(this.props.message.created_at).toLocaleTimeString();
    return(<div className='message'>
      <div className="message-header">
        <h3>{this.props.message.author}</h3>
        <small>{`- ${time}`}</small>
      </div>
      <p>{this.props.message.content}</p>
    </div>
    );
  }
}



export default Message;
