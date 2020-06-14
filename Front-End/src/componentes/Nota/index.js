import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';

import './styles.css';

const Nota = (props) => {

    let value = Math.round(props.value);

    const stars = [];

    for (let i = 0; i < 5; i++) {
        
        if (i < value)
            stars.push(<BsStarFill className="nota-estrela" key={i} />);
        else
            stars.push(<BsStar className="nota-estrela" key={i}/>);
    }

    return (
        <div>{ stars }</div>
    );
}

export default Nota;