import Navigation from './components/Navigation';
import './index.css'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Footer from './components/Footer';
import Apis from './views/Apis';
import ApiPage from './views/ApiPage';
import Error404 from './views/Error404';
import AboutButton from './components/AboutButton';
import About from './views/About';
import AllApiButton from './components/AllApiButton';
import ContactButton from './components/ContactButton';


function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/api' element={<Apis/>}/>
        <Route path='/api/:name' element={<ApiPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Error404/>}/>
        
      </Routes>

      <AllApiButton/>

      <AboutButton/>
      <ContactButton/>
      
      <Footer/>

    </>

  );
}

export default App;
