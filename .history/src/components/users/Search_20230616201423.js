import React, { Component } from 'react'

class Search extends Component {
    state = {
        text:''
    }
    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
  render() {
    return (
        <div>
            <from className="from">
                <input type="text" name="text" placeholder='Search Users...' value={this.state.text} onChange={this.onChange} />
                <input type="submit" value="Search" className='btn btn-dark btn-block' />
            </from>
      </div>
    )
  }
}

export default Search