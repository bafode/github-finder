import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'

class App extends Component {
  state = {
    loading: false,
    users:[]
  }

  searchUsers = text => {
    console.log(text);
  }

  async componentDidMount() {

    console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users:res.data,loading:false})
  }

  render() {
    const { loading, users } = this.state
    return (
      <div className="App">
        <Navbar />
        <Search searchUsers={this.searchUsers} />
        <div className="container">
          <Users loading={loading} users={users}/>
        </div>
      </div>
    );
  }
}

export default App;
