import React from 'react';
import Categorias from './components/carrossel/Categorias';
import Navbar from './components/navbar/Navbar';
import json from './data/DadosCategoria.json'
import { ICategoria } from './models/Interfaces';

function App() {
  const list: ICategoria[] = json.categorias;

  return (
    <div className='font-mono'>
      <Navbar />
      <Categorias produtos={list} />
    </div>
  );
}

export default App;
