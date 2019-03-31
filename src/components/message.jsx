import React, { Component} from 'react';


class Message extends Component {
  render() {
    return(<div className='message'>
      <div className="message-header">
        <h3>{this.props.message.author}</h3>
        <small>{`- ${this.props.message.created_at}`}</small>
      </div>
      <p>{this.props.message.content}</p>
    </div>
    );
  }

}



export default Message;
