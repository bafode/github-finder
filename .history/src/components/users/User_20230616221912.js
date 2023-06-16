import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
const User=()=> {
   
    useEffect(() => {
         // this.props.getUser(this.props.match.params.login)
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { login } = useParams();
      console.log(login)
      console.log(this.props.match)
    },[])
    
    render() {
        
        const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = this.props.user;
        const {loading}=this.props
    return (
      <div>
            <h1>{name}</h1>
      </div>
    )
  }
}

export default User
