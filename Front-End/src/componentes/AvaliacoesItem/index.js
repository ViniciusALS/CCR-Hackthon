import React from 'react';
import Nota from '../../componentes/Nota';

import './styles.css';

const AvaliacoesItem = (props) => {
    
    const usuario = props.usuario;
    const nota = props.nota;
    const comentario = props.comentario;
    
    return (

        <div className="avaliacao-card">
            <div className="avaliacao-card-header">
                <h3>{usuario}</h3> <Nota className="avaliacao-card-notas" value={nota}/>
            </div>
            <p className="avaliacao-card-descricao">{comentario}</p>
        </div>
    );
}

export default AvaliacoesItem;