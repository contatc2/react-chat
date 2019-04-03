import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';


class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({ value: '' })
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} >
          <div className="search-form-control form-group">
            <input
              // ref={(input) => { this.messageBox = input; }}
              className="form-control"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input type="submit" className="btn btn-flat" value="send" />
          </div>
        </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
