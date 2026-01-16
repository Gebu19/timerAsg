import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom' 
import Home from './components/Home'
import DashBoard from './components/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/dashboard" element={<DashBoard />} /> 
      </Routes>
    </>
  )
}

export default App
