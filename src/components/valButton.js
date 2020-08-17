import React from 'react';
import '../App.css';
import './myButton.scss';
import './css/val.scss'

export default function valButton() {
    return (
        <a className="transparent" href="#">
            <p><span className="bg"/><span className="base"/><span className="text">Click For Fun</span></p>
        </a>
    );
}