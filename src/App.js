import Navigation from './components/Navigation';
import './index.css'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Footer from './components/Footer';
import Apis from './views/Apis';
import ApiPage from './views/ApiPage';
import Error404 from './views/Error404';


function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/api' element={<Apis/>}/>
        <Route path='/api/:name' element={<ApiPage/>}/>
        <Route path='*' element={<Error404/>}/>
        
      </Routes>

      <Footer/>

    </>

  );
}

export default App;
