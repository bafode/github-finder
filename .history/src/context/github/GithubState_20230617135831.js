import { useReducer } from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types'

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading:false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)
    
    //set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })
    
    //search users
    const searchUsers =async text => {
        setLoading()
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        
        dispatch({type:SEARCH_USERS,payload:res.data.items})
    }
    
    //get Single user
  const getUser =async username => {
    setLoading()
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      dispatch({type:GET_USER,payload:res.data})
  }

  //clear users
  const clearUsers=()=>  dispatch({type:CLEAR_USERS})

    //get user Repos
    const getUserRepos =async username => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        dispatch({type:GET_REPOS,payload:res.data})
      }

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            loading: state.loading,
            repos: state.repos,
            searchUsers,
            getUser,
            clearUsers
        }}>{props.children}</GithubContext.Provider>
}

export default GithubState