import React, { Fragment,useState } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import User from './components/users/User'

const App=()=> {
  const [users, setUsers] = useState([])
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})
  const [alert,setAlert]=useState([])
  
  


  const searchUsers =async text => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setUsers(res.data.items)
    setLoading(false)
  }

  const clearUsers =async text => {
    setUsers([])
    setLoading(false)
  }

  //set Alert
   const showAlert=(msg, type)=>{
    this.setState( { msg, type })
    
    setTimeout(()=>setAlert(null),5000)
  }
  
  //search for github single user
  const getUser =async username => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setUser(res.data)
    setLoading(false)
  }

    //get user Repos
   const getUserRepos =async username => {
      setLoading(true)
      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      setRepos(res.data)
      setLoading(false)
    }

    return (
      <Router>
        <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
            <Routes>
              <Route exact path='/' element={
                <>
                  <Fragment>
                  <Search searchUsers={searchUsers}
                     clearUsers={clearUsers}
                     showClear={users.length > 0 ? true : false}
                     setAlert={showAlert}
                   />
                   <Users loading={loading} users={users}/>
                </Fragment>
                </>
              } /> 
              <Route exact path='/about' element={<About />} />
              <Route exact path='/user/:login' element={
                <>
                  <User loading={loading} user={user} getUser={getUser} getUserRepos={getUserRepos} repos={repos}/>
                </>
              } /> 
           </Routes>
        </div>
      </div>
      </Router>
    );
  }

export default App;
