import React from 'react'
import UserItem from './UserItem'
import PropTypes from 'prop-types'
const  Users=({users,loading})=>{
    
    console.log(users)
    
    return (
        <div style={userStyle}>
            {users?.map((user) => (
                <UserItem key={user.id} user={user}/>
            ))}
      </div>
    )
  }


const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap:'1rem'
}
Users.propTypes = {
    loading: PropTypes.bool.isRequired,
    users:PropTypes.array.isRequired,
}
export default Users