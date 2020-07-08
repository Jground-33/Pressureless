import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faListUl, faClock, faBookOpen, faPlus } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    
    const [selectedState , setSelected] = useState('list')

    return (
        <div className='footer'>
            <div onClick={() => setSelected('calendar')} className={`footer--icon__container ${selectedState === 'calendar' ? 'selected' : '' }`}>
                <FontAwesomeIcon className='icon footer--icon__calendar' icon={faCalendarAlt}/>
            </div>

            <div onClick={() => setSelected('list')} className={`footer--icon__container ${selectedState === 'list' ? 'selected' : '' }`}>
                <FontAwesomeIcon className='icon footer--icon__tasks' icon={faListUl}/>
            </div>

            <div className='footer--add-btn'>
                <FontAwesomeIcon className='footer--add-btn__plus' icon={faPlus} />
            </div>

            <div onClick={() => setSelected('clock')} className={`footer--icon__container ${selectedState === 'clock' ? 'selected' : '' }`}>
                <FontAwesomeIcon className='icon footer--icon__clock' icon={faClock}/>
            </div>

            <div onClick={() => setSelected('journal')} className={`footer--icon__container ${selectedState === 'journal' ? 'selected' : '' }`}>
                <FontAwesomeIcon className='icon footer--icon__journal' icon={faBookOpen}/>
            </div>
        </div>
    );
}

export default Footer;