import React, { useEffect,Fragment } from 'react'
import { useParams,Link } from 'react-router-dom';
const User=(props)=> {
    const { login } = useParams();
   
    useEffect(() => {
         props.getUser(login)
      // eslint-disable-next-line react-hooks/rules-of-hooks
      console.log(login)
    },[])
    
    
    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
      } = props.user;
    
        const {loading}=props.loading
    return (
      <Fragment>
            <Link to='/' className='btn btn-light'>
                 Back To Search
            </Link>
            Hireable:{' '}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}

      </Fragment>
    )
  }


export default User
