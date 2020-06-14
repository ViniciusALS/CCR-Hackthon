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

    const [titulo, setTitulo] = useState("Posto do Seu Zé");
    const [descricao, setDescricao] = useState("O melhor posto da região!");
    const [nota, setNota] = useState(3);
    const [endereco, setEndereco] = useState("Rua Melo Augusta");
    const [latitude, setLatitudo] = useState(-22.9108709);
    const [longitude, setLongitude] = useState(-43.2190417);
    const [disponibilidade, setDisponibilidade] = useState();
    const [reviews, setReviews] = useState();

    const posicao = [latitude, longitude];
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

                <h1>{titulo}</h1>
                <p>{descricao}</p>

                <Nota/>

                <p>{endereco}</p>
                
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