import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';

import Header from '../../componentes/Header';
import Nota from '../../componentes/Nota';
import DisponibilidadeItem from '../../componentes/DisponibilidadeItem';
import api from '../../services/api';

import MarkerIcon from '../../resources/marker.png';

import './styles.css';

const Estabelecimento = (props) => {

    const estabelecimentoId = props.match.params.id;

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [notaGeral, setNotaGeral] = useState(0);
    const [endereco, setEndereco] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [disponibilidade, setDisponibilidade] = useState([{}]);
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        api.get(`estabelecimentos/${estabelecimentoId}`)
            .then(response => {
                setTitulo(response.data.nome);
                setDescricao(response.data.descricao);
                setNotaGeral(response.data.notaGeral);
                setEndereco(response.data.endereco);
                setLatitude(response.data.latitude);
                setLongitude(response.data.longitude);
                setDisponibilidade(response.data.disponibilidades);
                setReviews(response.data.reviews);
            
            }).catch(function (error) {
                console.log(error);

                setTitulo("Posto do Seu Zé");
                setDescricao("O melhor posto da região!");
                setNotaGeral(3);
                setEndereco("Rua Melo Augusta");
                setLatitude(-22.9108709);
                setLongitude(-43.2190417);
                setDisponibilidade(
                    [
                        { "item": "Gasolina", "imagem": "file:///C:/Users/vinic/Desktop/gas-station.svg"},
                        { "item": "Banheiro", "imagem": "file:///C:/Users/vinic/Desktop/toilet.svg"},
                        { "item": "Chuveiro", "imagem": "file:///C:/Users/vinic/Desktop/shower.svg"},
                        { "item": "Cafeteria", "imagem": "file:///C:/Users/vinic/Desktop/cafe.svg"}
                    ]);
                setReviews(
                    [
                        { "usuario": "Carlos", "nota": 3, "comentario": "Bem okay." },
                        { "usuario": "Maria", "nota": 5, "comentario": "Recomendo, muito bom atendimento." },
                        { "usuario": "Felipe", "nota": 1, "comentario": "O café estava frio." }
                    ]
                );
            }); 
        }, []
    );

    const greenIcon = L.icon({
        iconUrl: MarkerIcon,
        iconSize:     [55, 55]
    });


    return (
        <div className="pagina">
            <Header/>
            <main>

                <Map className="map" center={[latitude, longitude]} zoom={17} animate={false} zoomControl={false}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[latitude, longitude]} icon={greenIcon}/>
                </Map>

                <h1>{titulo}</h1>
                <p>{descricao}</p>

                <Nota value={notaGeral} />

                <p>{endereco}</p>
                
                <Link to="#">
                    Avaliar estabelecimento
                </Link>

                <h2>Disponibilidades:</h2>

                <DisponibilidadeItem item={disponibilidade[0].item} imagem={disponibilidade[0].imagem}/>                             
                
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