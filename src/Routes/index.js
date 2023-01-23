import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "../pages/MainPage";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<MainPage/>}/>
    </Routes>
  </BrowserRouter>
);

export default Rotas;