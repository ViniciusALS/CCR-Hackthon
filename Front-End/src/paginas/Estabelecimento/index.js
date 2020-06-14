import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';

import Header from '../../componentes/Header';
import Nota from '../../componentes/Nota';

import imagem from '../../resources/gas-station.png';

import MarkerIcon from '../../resources/marker.png';

import './styles.css';

// import logo from '../../assets/logo.svg';

const Estabelecimento = (props) => {

    const estabelecimentoId = props.match.params.id;
    const [nota, setNota] = useState(3);

    const greenIcon = L.icon({
        iconUrl: MarkerIcon,
        iconSize:     [55, 55]
    });

    return (
        <div className="pagina">
            <Header/>
            <main>

                <Map className="map" center={posicao} zoom={17} animate={false} zoomControl={false}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={posicao} icon={greenIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </Map>

                <h1>Posto do Seu Zé</h1>
                <p>O melhor posto da região!</p>

                <Nota/>

                <p>Rua Melo Augusta, RJ, Rio de Janeiro</p>
                
                <Link to="#">
                    Avaliar estabelecimento
                </Link>

                <h2>Disponibilidades:</h2>

                <div>
                    <img src={imagem} alt="gas"/>
                    <p>Gasolina</p>
                </div>
                               

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