import React from 'react';
import './css/wisdomButton.css';

export default function wisdomButton( {str} ) {
    return (
        <div id="btn"> {str}
            <div id="circle"></div>
        </div>
    );
}