import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message'


class MessageList extends Component {

  render() {
    return (
      <div>
      <h2 className='border-bottom p-3'>Channel #{this.props.selectedChannel}</h2>
       { this.props.messages.map(message => <Message message={message} key={message.created_at} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}


export default connect(mapStateToProps)(MessageList);
