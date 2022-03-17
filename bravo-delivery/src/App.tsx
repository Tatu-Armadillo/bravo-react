import React from 'react';
import Categorias from './components/carrossel/Categorias';
import Navbar from './components/navbar/Navbar';
import Produtos from './components/produto/Produtos';
import json from './data/DadosProdutos.json'
import { IProduto } from './models/Produto';

function App() {
  const list: IProduto[] = json.produtos;

  return (
    <div className='font-mono'>
      <Navbar />
      <Categorias />
      <Produtos produtos={list} />
    </div>
  );
}

export default App;
