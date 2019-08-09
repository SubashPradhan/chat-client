import React from 'react';
import './App.css';
import { allMessages } from './actions'
import { connect } from 'react-redux'
import MessageFrom from './components/MessageForm'


class App extends React.Component {
  state = { message: '' }

  source = new EventSource('http://localhost:5000/stream')  //Listen to the stream
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
        {message.text}
      </p>)

    return <main>
      <MessageFrom />
      {messages}
    </main>
  }
}
function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = {
  allMessages

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
