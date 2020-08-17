import React from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';
import './myButton.scss';

export default function MyButton() {
    return (
        <div className='button'>
            <div className='line'/>
            <div className='line'/>
            <div className='line'/>
            <div className='line'/>
            <div className='line'/>
            <div className='line'/>
            <span>HOVER ME</span>
        </div>
    );
}
