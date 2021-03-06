import React from 'react';
import './App.css';
import { allMessages } from './actions'
import { connect } from 'react-redux'
import MessageFrom from './components/MessageForm'
import UserForm from './components/UserForm'


class App extends React.Component {
  state = { message: '' }

  source = new EventSource('https://pure-atoll-24949.herokuapp.com/stream')  //Listen to the stream
  componentDidMount() {
    this.source.onmessage = (event) => {

      const messages = JSON.parse(event.data)

      this.props.allMessages(messages)
      console.log("event test", event)
    }
  }

  render() {
    const messages = this
      .props
      .messages
      .map((message, index) => <p key={index}>
        {message.user}: {message.text}
      </p>)

    return <main>
      <MessageFrom user={this.props.user}/>
      <UserForm user={this.props.user}/>
      {messages}
    </main>
  }
}
function mapStateToProps(state) {
  return {
    messages: state.messages,
    user: state.user
  }
}

const mapDispatchToProps = {
  allMessages

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
