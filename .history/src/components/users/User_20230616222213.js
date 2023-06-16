import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
const User=({loading,user})=> {
   
    useEffect(() => {
         // this.props.getUser(this.props.match.params.login)
      // eslint-disable-next-line react-hooks/rules-of-hooks
      console.log(login)
    },[])
    
    
    const { login } = useParams();
        const { name, avatar_url, location, bio, blog, html_url, followers, following, public_repos, public_gists, hireable } = user;
       // const {loading}=this.props
    return (
      <div>
            <h1>{name}</h1>
      </div>
    )
  }


export default User
