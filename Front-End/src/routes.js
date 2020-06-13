import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './paginas/Home';
import Login from './paginas/Login';
import Perfil from './paginas/Perfil';
import Explorar from './paginas/Explorar';
import Historico from './paginas/Historico';
import Parada from './paginas/Parada';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Login} path="/login" />
      <Route component={Perfil} path="/perfil" />
      <Route component={Explorar} path="/explorar" />
      <Route component={Historico} path="/historico-atividade" />
      <Route component={Parada} path="/parada" />
    </BrowserRouter>
  );
}

export default Routes;