import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';
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

        </main>
    </div>
  )
}

export default Estabelecimento;