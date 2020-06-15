import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

// import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <main>
      <h1>CaminhON</h1>
      <p>Seu suporte na estrada.</p>

      <p>Esse e apenas um prototipo do nosso projeto.</p>

      <Link to="/estabelecimento/1">
        <strong>Veja como que os motoristas vao interagir com a nossa aplicacao.</strong>
      </Link>
    </main>
  )
}

export default Home;