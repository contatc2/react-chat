import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

import Message from '../components/message'
import MessageForm from './message_form'


class MessageList extends React.Component {
  constructor(props) {
    super(props)
    this.fetchMessages();
    this.list = React.createRef();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 10000);
    // this.list = {};
  }

  componentDidUpdate() {
      this.list.current.scrollTop = this.list.current.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className='message-box'>
        <h2 className='border-bottom p-3'>Channel #{this.props.selectedChannel}</h2>
        <div
          className="messages"
          ref = {this.list}
        >
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
