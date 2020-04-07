/**

 * Aprendizado:

import React, { useState } from 'react';
import Header from './Header';

// JSX (JavaScript XML)
function App() {

  /* usando o título

  return (

    <Header title="Semana OmniStack" />

  );

 *
  /* usando children 

  return (

    <Header>

      Semana OmniStack

    </Header>

  );

  *
  const [counter, setCounter] = useState(0);

  /*

   * useState

   * retorna um array com 2 posições: o valor da variável e uma função de atualização

   * Array [valor, funcaoDeAtualizacao]

   *
  function increment() {

    setCounter(counter + 1);
  }
  return(

    <div>

      <Header>Contador: {counter}</Header>

      <button onClick={increment}>Incrementar</button>

    </div>

  );

}
export default App;

*/

import React from 'react';

import './global.css';

import Routes from './routes';

function App() {

  return(

    <Routes />

  );

}
export default App;
//JSX (JavaScript XML) que é qdo o html é integrado dentro do Javascript
//um componente no React é uma função que retorna html;ela pode ter funcionalidade javascript,css
//useState retorna um Array com duas posições [valor,funcaoDeAtualização]