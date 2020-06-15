import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MapaAplicacao from '../../componentes/MapaAplicacao';
import Nota from '../../componentes/Nota';
import DisponibilidadeItem from '../../componentes/DisponibilidadeItem';
import AvaliacoesItem from '../../componentes/AvaliacoesItem';
import api from '../../services/api';

import './styles.css';

const Estabelecimento = (props) => {

    const estabelecimentoId = props.match.params.id;

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [notaGeral, setNotaGeral] = useState(0);
    const [endereco, setEndereco] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [disponibilidades, setDisponibilidades] = useState([{}]);
    const [reviews, setReviews] = useState([{}]);

    useEffect(() => {
        api.get(`estabelecimentos/${estabelecimentoId}`)
            .then(response => {
                setTitulo(response.data.nome);
                setDescricao(response.data.descricao);
                setNotaGeral(response.data.notaGeral);
                setEndereco(response.data.endereco);
                setLatitude(response.data.latitude);
                setLongitude(response.data.longitude);
                setDisponibilidades(response.data.disponibilidades);
                setReviews(response.data.reviews);
            
            }).catch(function (error) {
                console.log(error);

                setTitulo("Posto do Seu Zé");
                setDescricao("O melhor posto da região!");
                setNotaGeral(3);
                setEndereco("Rua Melo Augusta");
                setLatitude(-22.9108709);
                setLongitude(-43.2190417);
                setDisponibilidades(
                    [
                        { "item": "Gasolina", "imagem": "https://imgur.com/nlQaeVP.png"},
                        { "item": "Banheiro", "imagem": "https://imgur.com/RQ9DsSA.png"},
                        { "item": "Chuveiro", "imagem": "https://imgur.com/tJS9JHe.png"},
                        { "item": "Cafeteria", "imagem": "https://imgur.com/QseCioi.png"}
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

    return (
        <main>
            <MapaAplicacao 
                latitude={latitude}
                longitude={longitude}/>

            <div className="container">
                <h1 className="estabelecimento-titulo">{titulo}</h1>
                <p className="estabelecimento-descricao">{descricao}</p>

                <Nota value={notaGeral} className="estabelecimento-nota"/>

                <p className="estabelecimento-endereco">{endereco}</p>
                
                <Link className="link-btn" to="#">
                    <div className="estabelecimento-btn-avaliar">Avaliar estabelecimento</div>
                </Link>

                <h2>Disponibilidades:</h2>

                <div className="estabelecimento-disponibilidades">
                    {disponibilidades.map(disponibilidade => (
                        <DisponibilidadeItem 
                            item={disponibilidade.item} 
                            imagem={disponibilidade.imagem}/>                             
                    ))}
                </div>
                                
                <h2>Avaliações:</h2>
                
                <div className="estabelecimento-avaliacoes">
                    {reviews.map(review => (
                        <AvaliacoesItem 
                            usuario={review.usuario}
                            nota={review.nota}
                            comentario={review.comentario}/>              
                    ))}  
                </div>                      
            </div>      
        </main>
    )
}

export default Estabelecimento;