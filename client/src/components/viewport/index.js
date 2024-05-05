import React, { useState, useEffect } from 'react';
import FitToggleButton from '../FitToggleButton'; // import the FitToggleButton
import './style.css';


const ViewportComponent = ({ src, grid, alt }) => {
    const [fit, setFit] = useState('contain'); // initial value is 'contain'

    const toggleFit = () => {
        setFit(fit === 'contain' ? 'cover' : 'contain'); // toggle between 'contain' and 'cover'
    };

    return (
        <div className="viewport">
            {grid && <div className="grid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>}
            <img className="img-fullscreen" style={{objectFit: fit}} src={src} alt={alt}/>
            <FitToggleButton toggleFit={toggleFit} isFitContain={fit === 'contain'}/> {/* pass the isFitContain prop */}
        </div>
    );
};

export default ViewportComponent;