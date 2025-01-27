import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Curso } from '@/pages/Curso';
import { Contacto } from '@/pages/contacto';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path='/curso/:id' element={<Curso/>} />
        </Routes>
    </BrowserRouter>
  )
}