import React, { Component } from 'react'

class User extends Component {

    componentDidMount() {
       this.props.getUser(this.props.match.params.login)
    } 
    
  render() {
    return (
      <div>
        <h1>User</h1>
      </div>
    )
  }
}

export default User
