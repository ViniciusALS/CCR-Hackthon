import React from 'react';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';

import Home from './paginas/Home';
import Login from './paginas/Login';
import Perfil from './paginas/Perfil';
import Explorar from './paginas/Explorar';
import Historico from './paginas/Historico';
import Estabelecimento from './paginas/Estabelecimento';

const Routes = () => {
  return (
    <BrowserRouter>
      <Redirect from="/" to="/estabelecimento/1"/>
      <Route component={Estabelecimento} path="/estabelecimento/:id" />
    </BrowserRouter>
  );
}

export default Routes;