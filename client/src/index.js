import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import MobileView from './views/mobile';
import AlexView from './views/alexa';
import VeniceView from './views/venice';
import DragonView from './views/dragon';
import Settings from './settings/Settings';
import './App.css';

const App = () => {
    console.log('inside App component');
    const [showSettings, setShowSettings] = useState(false);

    console.log('something happen here???')
    const openSettings = () => {
        setShowSettings(true);
    }

    return (
        <Router>
            <div>
                {console.log('inside App component return')}
                {/*{!showSettings && <FaCog className="gear-icon" onClick={() => setShowSettings(true)} />}*/}
                <Routes>
                    <Route path="/" element={<Home openSettings={openSettings} />} />
                    <Route path="/mobile" element={<MobileView openSettings={openSettings} />} />
                    <Route path="/alexa" element={<AlexView openSettings={openSettings} />} />
                    <Route path="/venice" element={<VeniceView openSettings={openSettings} />} />
                    <Route path="/dragon" element={<DragonView openSettings={openSettings} />} />
                </Routes>
                {showSettings && <Settings onClose={() => setShowSettings(false)} />}
            </div>
        </Router>
    );
};

const root = document.getElementById('root');
console.log('before createRoot');
createRoot(root).render(<App />);
console.log('starting...')
