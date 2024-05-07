import React from 'react';
import { FaCog } from 'react-icons/fa';

const DragonView = ({openSettings}) => {
    return (
        <div>
            <div onClick={openSettings}>
                <FaCog className="mobile-settings-icon"/>
            </div>
            <h1>
                TODO: create a view familiar with users of certain, color-themed american-made cameras
            </h1>
        </div>
    );
};

export default DragonView;
