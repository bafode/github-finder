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
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>

      </Fragment>
    )
  }


export default User
