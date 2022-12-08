import React,{useEffect} from 'react';
import './styles/app.css';
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Jobslist from './pages/Jobslist'
import Job from './pages/Job'
import Header from './components/Header'
import PageNotFound from './pages/PageNotFound'
import { useSelector, useDispatch } from "react-redux";
import {SET_LIST_DATA, GET_LIST_JOBS_BY_TAG, CLEAR_LIST_BY_TAGS,GET_LIST_OF_TAGS,REMOVE_TAG_BY_TAGS} from './actions/actionTypes'
import {data} from './Data/data'

function App() {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const dispatch = useDispatch()

  const jobsList = useSelector((state) => {
      if (state.jobsReducer.listByTag.length>0) return state.jobsReducer.listByTag
      return state.jobsReducer.jobs
  })

  const tags = useSelector((state) => {
    if (state.jobsReducer.tags.length>0) return state.jobsReducer.tags
    return []
  })
  
  const getListOfTags = () => {
    dispatch({
      type: GET_LIST_OF_TAGS
    })
  }

  const orderbytag = (tag) => {
    dispatch({
      type: GET_LIST_JOBS_BY_TAG,
      payload: tag
    })
  }

  const clearTags = () => {
    dispatch({
      type: CLEAR_LIST_BY_TAGS
    })
  }

  const removeTagByTags = (tag) => {
    dispatch({
      type: REMOVE_TAG_BY_TAGS,
      payload: tag
    })
  }
  

  useEffect(() => {
      // fetch('data.json')
      //     .then((response) => {
      //         return response.json()
      //     })
      //     .then((data) => {
      //         dispatch({
      //             type: SET_LIST_DATA,
      //             payload: data
      //         })
      //         console.log(data.length)
      //     })
      //     .catch((e) => {
      //         console.log("Hubo un error"+ e)
      //     })
      dispatch({
        type: SET_LIST_DATA,
        payload: data
      })
  }, [dispatch])
    
  return (
    
    <main className={themeName}>
        <Header toggleTheme={toggleTheme} themeName={themeName}/>
        <div className="wrapper">

        
          <Router>
            <Routes>
              <Route path='/' element={<Jobslist themeName={themeName} data={jobsList} orderbytag={orderbytag} clearTags={clearTags} getListOfTags={getListOfTags}  tags={tags} removeTagByTags={removeTagByTags}/>} />
              <Route path='/job/:id' element={<Job/>} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Router>
        </div>
   
    </main>
  );
}

export default App