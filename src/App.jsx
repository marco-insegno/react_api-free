import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './views/Home';
import { Routes, Route } from 'react-router-dom';
import Checkout from './views/Checkout';
import Error404 from './views/Error404';

function App() {

  return (
    <>

      <Navigation />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<Error404 />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App
