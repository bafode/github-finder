import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'

class App extends Component {
  state = {
    loading: false,
    users:[]
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users')
    this.setState({users:res.data,loading:false})
  }

  render() {
    
    return (
      <div className="App">
        <Navbar />
        <div className="container">
           <Users/>
        </div>
      </div>
    );
  }
}

export default App;
