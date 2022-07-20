// rcc

import './App.css';
import Screen from './Views/Screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './utils/Footer';
import Header from './utils/Header';
import ScreenAbout from './Views/ScreenAbout'
import Services from './Views/Services'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Screen />} />
          <Route path='/Screen' element={<Screen />} />
          <Route path='/ScreenAbout' element={<ScreenAbout />} />
          <Route path='/Services' element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
