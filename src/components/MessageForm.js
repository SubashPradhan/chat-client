import React from 'react'
import * as request from 'superagent'
import MessageFormContainer from './MessageFormContainer'

export default class MessageFrom extends React.Component {
  state = { message: "" }

  onSubmit = async (event) => {
    event.preventDefault()
    // console.log('state.message', this.state.message)
    const response = await request
      .post('http://localhost:5000/message')
      .send({ 
        message: this.state.message ,
        user: this.props.user
      })


    this.setState({ message: '' })
    console.log("response", response)
  }

  onChange = (event) => {
    const { value } = event.target //get text from input form
    this.setState({ message: value })
  }

  render() {  
    return <MessageFormContainer
    onSubmit={this.onSubmit}
    value={this.state.message}
    onChange={this.onChange}
    />
  }

}