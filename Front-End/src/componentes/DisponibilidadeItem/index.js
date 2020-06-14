import React from 'react';

import './styles.css';

const ItemCard = (props) => {
    
    const itemName = props.item;
    const imagePath = props.imagem;
    
    return (

        <div className="item-card"> 
            <img className="item-card-imagem" src={imagePath} alt={itemName}/>
            <p className="item-card-legenda">{itemName}</p>
        </div>
    );
}

export default ItemCard;