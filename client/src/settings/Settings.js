import React from 'react';
import { Link } from 'react-router-dom';
import { FaWindowClose } from "react-icons/fa";

import './Settings.css';

const Settings = ({ onClose }) => {
    return (
        <div className="settings-overlay">
            <div className={"settings-close"} onClick={onClose}>
                <FaWindowClose size={"2rem"} />
            </div>

            <h1>Settings</h1>

            {/* TODO: style and add settings! */}
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
