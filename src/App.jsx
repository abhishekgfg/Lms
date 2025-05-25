import React from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
//import HomePage from './Pages/Homepage/HomePage'
import Home from './Pages/Homepage/Home'





const App = () => {
  return (
    <div>

<BrowserRouter>
<Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
     
    </BrowserRouter>
      
    </div>
  )
}

export default App