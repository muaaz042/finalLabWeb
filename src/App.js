import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './components/Home';
import Navbar from './components/Navbar';
import DataFetcher from './components/DataFetcher';

const App = () => {
  return (
    // <DataFetcher/>
    <Home/>
    // <Router>
    //   <Navbar/>
    //   <Routes>
    //     <Route path='/home' element= {<Home/>}>Home</Route>
    //     <Route path='/details' element= {<Details/>}>Home</Route>
    //   </Routes>
    // </Router>
  )
}

export default App;