import React from 'react';

import './styles.css';

const ItemCard = () => {
    
    return (

        <div className="item-card"> 
            <img src={imagem} alt="gas"/>
            <p>Gasolina</p>
        </div>
    );
}

export default ItemCard;