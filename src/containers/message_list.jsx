import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

import Message from '../components/message'
import MessageForm from './message_form'


class MessageList extends Component {

  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.refresher);
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
    { fetchMessages },
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
