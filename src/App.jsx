import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom' 
import Home from './components/Home'
import { Hello1 } from './components/Hello1'
import Effect from './components/Effect'
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
