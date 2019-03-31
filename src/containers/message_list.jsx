import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions';

import Message from '../components/message'
import MessageForm from './message_form'


class MessageList extends Component {
  componentWillMount() {
    this.props.setMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div>
      <h2 className='border-bottom p-3'>Channel #{this.props.selectedChannel}</h2>
      <div className="messages">
       { this.props.messages.map(message => <Message message={message} key={message.created_at} />)}
      </div>
      <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
