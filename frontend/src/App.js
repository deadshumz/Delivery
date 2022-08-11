import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/NavbarComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';

export default function App() {
  return (
      <>
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </>
  )
}
