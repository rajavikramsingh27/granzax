// rcc

import './App.css';
import Home from './Views/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './utils/Footer';
import Header from './utils/Header';
import About from './Views/About'
import Services from './Views/Services'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Screen' element={<Home />} />
          <Route path='/ScreenAbout' element={<About />} />
          <Route path='/Services' element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
