import React from "react";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { LandPage } from './Pages/LandPage/LandPage'

import { PrincPragas } from './Pages/PrincPragas/PrincPragas'
import { Sobre } from "./Pages/Sobre/Sobre.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandPage />} />

          <Route path="praga" element={<Sobre />} />
          <Route path="princPragas" element={<PrincPragas />}>

          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

function Childy() {
  const id = 2;
  console.log(id)
  return (
    <>
      <h3>ID: {id}</h3>
    </>
  )
}
