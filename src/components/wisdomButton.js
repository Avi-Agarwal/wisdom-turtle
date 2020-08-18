import React from 'react';
import './css/wisdomButton.css';

export default function wisdomButton( {str, onPress} ) {
    return (
        <div id="btn" onClick={onPress}> {str}
            <div id="circle"/>
        </div>
    );
}