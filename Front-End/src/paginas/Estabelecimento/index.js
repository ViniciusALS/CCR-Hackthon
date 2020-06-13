import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

// import logo from '../../assets/logo.svg';

const Estabelecimento = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          {/* <img src={logo} alt="CaminhON" /> */}
        </header>

        <main>
          <h1>Estabelecimento</h1>
          <p>Seu suporte na estrada.</p>

          <Link to="/login">
            <span>
              <FiLogIn />
            </span>
            <strong>Fazer login</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Estabelecimento;