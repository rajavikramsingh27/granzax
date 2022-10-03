// rcc

import './App.css';
import Home from './Views/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './utils/Footer';
import Header from './utils/Header';
import About from './Views/About'
import Services from './Views/Services'
import Mobile from './Views/Mobile'
import Portfolio from './Views/Portfolio'
import Howwork from './Views/Howwork'
import Career from './Views/Career'
import Conact from './Views/Conact';
import AppName from './Views/AppName';
import List from './Views/List';
import Grid from './Views/Grid';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Screen' element={<Home />} />
          <Route path='/ScreenAbout' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Mobile' element={<Mobile />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Howwork' element={<Howwork />} />/
          <Route path='/Career' element={<Career />} />/
          <Route path='/Conact' element={<Conact />} />/
          <Route path='/AppName' element={<AppName />} />/
          <Route path='/List' element={<List />} />/
          <Route path='/Grid' element={<Grid/>} />/


          
          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
