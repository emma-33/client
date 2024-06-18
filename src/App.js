import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Blockchain from './components/pages/Blockchain';
import Crypto from './components/pages/Crypto';
import Forensics from './components/pages/Forensics';
import GamePwn from './components/pages/GamePwn';
import Hardware from './components/pages/Hardware';
import Misc from './components/pages/Misc';
import Mobile from './components/pages/Mobile';
import Osint from './components/pages/OSINT';
import Pwn from './components/pages/Pwn';
import Reversing from './components/pages/Reversing';
import Web from './components/pages/Web';
import CTF from './components/pages/CTF';
import NoPage from './components/pages/NoPage';
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Blockchain" element={<Blockchain />} />
          <Route path="Crypto" element={<Crypto />} />
          <Route path="Forensics" element={<Forensics />} />
          <Route path="GamePwn" element={<GamePwn />} />
          <Route path="Hardware" element={<Hardware />} />
          <Route path="Misc" element={<Misc />} />
          <Route path="Mobile" element={<Mobile />} />
          <Route path="Osint" element={<Osint />} />
          <Route path="Pwn" element={<Pwn />} />
          <Route path="Reversing" element={<Reversing />} />
          <Route path="Web" element={<Web />} />
          <Route path="CTF" element={<CTF />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
