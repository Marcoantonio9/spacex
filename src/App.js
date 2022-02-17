import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './global.scss'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import DetaisLaunches from './pages/DetailsLaunches/DetailsLaunches'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>      
        <Route path="/detalhes/:id" element={<DetaisLaunches />}></Route>      
      </Routes>
      <Footer />
    </Router>
  )
}

export default App