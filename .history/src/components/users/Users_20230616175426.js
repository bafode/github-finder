import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
    
    render() {
        const { users } = this.props.users
        console.log(this.props.users)
    return (
        <div style={userStyle}>
            {users?.map((user) => (
                <UserItem key={user.id} user={users}/>
            ))}
      </div>
    )
  }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap:'1rem'
}

export default Users