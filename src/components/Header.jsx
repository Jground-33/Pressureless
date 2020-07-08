import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div className='header'>
            <FontAwesomeIcon className='icon header--menu' icon={faBars} />
            <h3>Pressureless</h3>
            <FontAwesomeIcon className='icon header--trophy' icon={faTrophy} />
        </div>
    );
}

export default Header; 