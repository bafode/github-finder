import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
        <div>
            <from className="from">
                <input type="text" name="text" placeholder='Search Users...' />
                <input type="submit" value="Search" className='btn btn-dark btn-block' />
            </from>
      </div>
    )
  }
}

export default Search