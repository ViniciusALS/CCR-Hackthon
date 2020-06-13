import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = () => {
    return (

        <header class="mobile-menu"> 
            <nav>
                <Link to="#">
                    <FiArrowLeft />
                </Link>
                
                <Link to="#">
                    <FiMenu/>
                </Link>
            </nav>
        </header>
    );
}

export default Header;