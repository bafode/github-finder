import React, { Component,Fragment } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'

class App extends Component {
  state = {
    loading: false,
    users: [],
    user:{},
    alert:null
  }

  searchUsers =async text => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users:res.data.items,loading:false})
  }

  clearUsers =async text => {
    
    this.setState({users:[],loading:false})
  }

  //set Alert
  setAlert=(msg, type)=>{
    this.setState({ alert: { msg, type } })
    
    setTimeout(()=>this.setState({alert:null}),5000)
  }
  
  //search for github single user
  getUser =async username => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users:res.data.items,loading:false})
  }

  render() {
    const { loading, users } = this.state
    return (
      <Router>
        <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
            <Routes>
              <Route exact path='/' element={
                <>
                  <Fragment>
                  <Search searchUsers={this.searchUsers}
                     clearUsers={this.clearUsers}
                     showClear={this.state.users.length > 0 ? true : false}
                     setAlert={this.setAlert}
                   />
                   <Users loading={loading} users={users}/>
                </Fragment>
                </>
              } /> 
              <Route exact path='/about' element={<About/>}/>
           </Routes>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
