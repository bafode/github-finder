import React, { useState,useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'
const Search = ({showClear,setAlert}) => {
    const [text,setText]=useState("")
    const githubContext=useContext(GithubContext)
    const {searchUsers,clearUsers,users}=githubContext

    const onSubmit=(e)=> {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter something', 'light')
        } else {
            searchUsers(text)
             setText('')
        }
    }
    const onChange = (e) => {
        setText(e.target.value)
    }
 
    return (
        <div>
            <form onSubmit={onSubmit} className="from">
                <input type="text" name="text" placeholder='Search Users...' value={text} onChange={onChange} />
                <input type="submit" value="Search" className='btn btn-dark btn-block' />
            </form>
            {users.length>0&&<button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
      </div>
    )
  }


Search.propTypes = {
    showClear:PropTypes.bool.isRequired,
}

export default Search