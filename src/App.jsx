import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
const {loading , data } = useAuth
  return (
    <>
    <Navbar/>
    <Sidebar/>
    </>
  )
}

export default App
