import React, { useState } from 'react'
import imagenes from '../assets/imagenes'
export const Header = () => {
    
    return (
        <div className="Header">
            <a href="facebook.com">
            <img src={imagenes.img1} />
            </a>
            <h1>OpenWeatherMap API</h1>
        </div>
    )
}
