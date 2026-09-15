import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import Header from './components/Header.jsx'
import { useState } from 'react'

import './App.css'

function App() {

  const [temaClaro, setTemaClaro] = useState(false)
  
  return (
    <div className={`app ${temaClaro ? "light-theme" : ""}`}>
    <Header temaClaro={temaClaro} alternarTema={setTemaClaro} /> 
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/filme/:id" element={<MovieDetails/>} />
    </Routes>
    </div>  
  )
}

export default App