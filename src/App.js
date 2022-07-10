import './App.css';

//import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/news';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = "18c9b52829a348b0926f054e2daf8d51"
  //const [ setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/> 
        {/* <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      /> */}
        <Routes>
          <Route exact path="/" element={<News  apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/> }/> 
          <Route exact path="/business"element= {<News  apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}/>  
          <Route exact path="/entertainment"element= {<News  apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>  
          <Route exact path="/general" element= {<News  apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>  
          <Route exact path="/health" element= {<News  apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}/>  
          <Route exact path="/science" element= {<News  apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}/>  
          <Route exact path="/sports" element= {<News  apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>  
          
          <Route exact path="/technology" element= {<News  apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/> }/>
        </Routes>
        </Router>
      </div>
    )
  }

  export default App
