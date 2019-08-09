import React from 'react'
import UserFormContainer from './UserFormContainer'
import {setName} from '../actions'
import {connect} from 'react-redux'


class UserForm extends React.Component {
  state = { name: "" }

  onSubmit = async (event) => {
    event.preventDefault()
    this.props.setName(this.state.name)
    this.setState ({name: ''})
    
  }

  onChange = (event) => {
    const { value } = event.target //get text from input form

    this.setState({ name: value })

  }

  render() {  
    return <UserFormContainer
    onSubmit={this.onSubmit}
    value={this.state.name}
    onChange={this.onChange}
    user={this.props.user}
    />
  }

}

const mapDispatchToProps = {
  setName
}

export default connect (null, mapDispatchToProps)(UserForm)