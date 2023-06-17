import React, { Fragment,useState } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import User from './components/users/User'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

const App=()=> {
  const [alert,setAlert]=useState([])
  //set Alert
   const showAlert=(msg, type)=>{
    setAlert( { msg, type })
    
    setTimeout(()=>setAlert(null),5000)
  }
  


  

  return (
    <GithubState>
      <AlertState>
      <Router>
        <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
            <Routes>
              <Route exact path='/' element={
                <>
                  <Fragment>
                  <Search
                     setAlert={showAlert}
                   />
                   <Users/>
                </Fragment>
                </>
              } /> 
              <Route exact path='/about' element={<About />} />
              <Route exact path='/user/:login' element={
                <>
                  <User/>
                </>
              } /> 
           </Routes>
        </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>    
    );
  }

export default App;
