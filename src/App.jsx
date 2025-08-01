import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Error from './components/Error'



const App = () => {
  return (
    <div> 
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />         
          <Route path='*' element={<Error />} />         
        </Routes>
      </Router>
     </div>
  )
}

export default App











