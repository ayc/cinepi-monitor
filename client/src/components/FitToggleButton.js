import React from 'react';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';

const FitToggleButton = ({ toggleFit, isFitContain }) => {
    return (
        <button className="toggle-button" onClick={toggleFit}>
            {isFitContain ? <MdFullscreenExit color="red" /> : <MdFullscreen color="green" />}
        </button>
    );
};

export default FitToggleButton;