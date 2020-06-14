import React from 'react';

import './styles.css';

const ItemCard = (props) => {
    
    const itemName = props.item;
    const imagePath = props.imagem;
    
    return (

        <div className="item-card"> 
            <img src={imagePath} alt={itemName}/>
            <p>{itemName}</p>
        </div>
    );
}

export default ItemCard;