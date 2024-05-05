import React from 'react';
import { Link } from 'react-router-dom';
import './Settings.css';

const Settings = ({ onClose }) => {
    return (
        <div className="settings-overlay">
            <button onClick={onClose}>Close</button>
            <h1>Settings</h1>
            {/* Add your settings here */}
            <nav>
                <ul>
                    <li><Link to="/" onClick={onClose}>Home</Link></li>
                    <li><Link to="/mobile" onClick={onClose}>Mobile View</Link></li>
                    <li><Link to="/alexa" onClick={onClose}>'German' View</Link></li>
                    <li><Link to="/venice" onClick={onClose}>'Japanese' View</Link></li>
                    <li><Link to="/dragon" onClick={onClose}>'American' View</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Settings;