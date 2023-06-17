import React, { useState } from 'react'
import PropTypes from 'prop-types'
const Search = (props) => {
    const [text,setText]=useState("")
    


    const onSubmit=(e)=> {
        e.preventDefault();
        if (text === '') {
            props.setAlert('Please enter something', 'light')
        } else {
            props.searchUsers(this.state.text)
             setText('')
        }
    }
    const onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
 
      const{showClear,clearUsers}=props
    return (
        <div>
            <form onSubmit={onSubmit} className="from">
                <input type="text" name="text" placeholder='Search Users...' value={text} onChange={onChange} />
                <input type="submit" value="Search" className='btn btn-dark btn-block' />
            </form>
            {showClear&&<button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
      </div>
    )
  }


Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired,
}

export default Search