import './style.css';
import { useEffect } from "react";
import Aos from "aos";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

// import pages
import HomePage from './pages/HomePage';
import Store from './pages/Store';
import About from './pages/About';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';


// import pages

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
  <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/store' element={<Store />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Pagenotfound />} />
    </Routes>
  </>
  );
}

export default App;
