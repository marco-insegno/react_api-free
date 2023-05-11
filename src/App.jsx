import './index.css'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './views/Home';
import { Routes, Route } from 'react-router-dom';
import AllApi from './views/AllApi';
import ApiPage from './views/ApiPage';
import Error404 from './views/Error404';

function App() {

  return (
    <>

      <Navigation />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/api' element={<AllApi />} />
        <Route path='/api/:name' element={<ApiPage />} />
        <Route path='*' element={<Error404 />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App
