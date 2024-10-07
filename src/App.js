import './App.css';

import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



const App = () => {
  const pageSize = 9
  const newsApi = process.env.REACT_APP_NEWS_API    

  const [query, setQuery] = useState('')            
  
  const [progress, setProgress] = useState(0)          


  const handleSearch = (query) => {          
    setQuery(query)
  }

  
    return (
      <div>
        <Router>
          <Navbar onSearch={handleSearch}  />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            
            <Route exact path="/" element={<News  setProgress={setProgress}  key="general" pageSize={pageSize} country="us" newsAPI={newsApi} category="general" query={query} />} />
            <Route exact path="/business" element={<News  setProgress={setProgress}  key="business" pageSize={pageSize} country="us" newsAPI={newsApi} category="business" query={query} />} />
            <Route exact path="/entertainment" element={<News  setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="us" newsAPI={newsApi} category="entertainment" query={query} />} />
            <Route exact path="/health" element={<News  setProgress={setProgress}  key="health" pageSize={pageSize} country="us" newsAPI={newsApi} category="health"  query={query} />} />
            <Route exact path="/science" element={<News  setProgress={setProgress}  key="science" pageSize={pageSize} country="us" newsAPI={newsApi} category="science" query={query} />} />
            <Route exact path="/sports" element={<News  setProgress={setProgress}  key="sports" pageSize={pageSize} country="us" newsAPI={newsApi} category="sports" query={query} />} />
            <Route exact path="/technology" element={<News  setProgress={setProgress}  key="technology" pageSize={pageSize} country="us" newsAPI={newsApi} category="technology" query={query} />} />
            
          </Routes>
        </Router>
      </div>
    )
  }


  export default App;