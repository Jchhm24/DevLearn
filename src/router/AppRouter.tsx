import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { AboutMe } from '../pages/AboutMe';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Sobre mi" element={<AboutMe />} />
        </Routes>
    </BrowserRouter>
  )
}