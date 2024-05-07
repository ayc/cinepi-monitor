import React, { useState, useEffect, useRef } from 'react';
import FitToggleButton from '../FitToggleButton'; // import the FitToggleButton
import './style.css';


const ViewportComponent = ({ src, grid, alt }) => {

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
        </div>
    );
};

export default ViewportComponent;
