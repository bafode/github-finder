import React, { Component } from 'react'

class UserItem extends Component {
    constructor() {
        super();
        this.state = {
            id: 1,
            login: "mojombo",
            avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",  
            html_url: "https://github.com/mojombo",
        }
    }
  render() {
      const{id,login,avatar_url,html_url}=this.state
    return (
        <div className='card text-center'>
            <img src={avatar_url} alt="" className="round-img" style={{width:'60px'}} />
            <h3>{avatar_url}</h3>
      </div>
    )
  }
}

export default UserItem
