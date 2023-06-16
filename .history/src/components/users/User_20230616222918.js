import React, { useEffect,Fragment } from 'react'
import { useParams,Link } from 'react-router-dom';
const User=(props)=> {
    const { login } = useParams();
   
    useEffect(() => {
         props.getUser(login)
      // eslint-disable-next-line react-hooks/rules-of-hooks
      console.log(login)
    },[])
    
    
        const { name, avatar_url, location, bio, blog, html_url, followers, following, public_repos, public_gists, hireable } = props.user;
        const {loading}=props.loading
    return (
      <Fragment>
            <Link to='/' className='btn btn-light'>
                 Back To Search
            </Link>
      </Fragment>
    )
  }


export default User
