import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

// import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          {/* <img src={logo} alt="CaminhON" /> */}
        </header>

        <main>
          <h1>CaminhON</h1>
          <p>Seu suporte na estrada.</p>

          <p>Esse e apenas um prototipo do nosso projeto.</p>

          <Link to="/estabelecimento/1">
            <strong>Veja como que os motoristas vao interagir com a nossa aplicacao.</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Home;