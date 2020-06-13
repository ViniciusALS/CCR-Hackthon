import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../componentes/Header';
import Nota from '../../componentes/Nota';

import './styles.css';

// import logo from '../../assets/logo.svg';

const Estabelecimento = () => {
  return (
    <div class="pagina">
        <Header/>
        <main>
            <h1>Posto do Seu Zé</h1>
            <p>O melhor posto da região!</p>

            <Nota/>

            <p>Rua Melo Augusta, RJ, Rio de Janeiro</p>
            
            <Link to="#">
                Avaliar estabelecimento
            </Link>

            <h2>Disponibilidades:</h2>

            <h2>Avaliações:</h2>

            <div>
                <h3>Marcos Antonio</h3>
                <Nota/>
                <p>Bem okay.</p>
            </div>

        </main>
    </div>
  )
}

export default Estabelecimento;