import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './globals.css'
// import './css/style.css'
import NavbarComponent from './Components/NavbarComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Restaurant from './Restaurant';

const API_URL = 'http://localhost:8000'

export default function App() {
  return (
      <>
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home API_URL = {API_URL}/>}/>
            <Route path="/restaurant/:id" element={<Restaurant API_URL = {API_URL}/>}/>
          </Routes>
        </BrowserRouter>
      </>
  )
}
