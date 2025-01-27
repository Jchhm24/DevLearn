import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { AboutMe } from '../pages/AboutMe';
import { Curso } from '@/pages/Curso';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Sobre mi" element={<AboutMe />} />
            <Route path='/curso/:id' element={<Curso/>} />
        </Routes>
    </BrowserRouter>
  )
}