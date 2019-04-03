import React from 'react';
import MessageList from '../containers/message_list'
import ChannelList from '../containers/channel_list'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" alt="" className="logo"/>
        <ChannelList />
        <MessageList />
      </div>
    );
  }
}

export default App;
