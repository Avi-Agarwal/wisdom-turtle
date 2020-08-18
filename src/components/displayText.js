import React from "react";
import './css/fancyText.css'

export default function displayText( {str} ) {
    return (
        <h1 className="home-title">
  <span>{str}</span>
        </h1>
);
}