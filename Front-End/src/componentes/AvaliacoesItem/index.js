import React from 'react';
import Nota from '../../componentes/Nota';

import './styles.css';

const AvaliacoesItem = (props) => {
    
    const usuario = props.usuario;
    const nota = props.nota;
    const comentario = props.comentario;
    
    return (

        <div>
            <h3>{usuario}</h3>
            <Nota value={nota}/>
            <p>{comentario}</p>
        </div>
    );
}

export default AvaliacoesItem;