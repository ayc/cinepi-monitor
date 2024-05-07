import React from 'react';
import {FaCog} from "react-icons/fa";

const VeniceView = ({openSettings}) => {
    return (
        <div>
            <div onClick={openSettings}>
                <FaCog className="mobile-settings-icon"/>
            </div>
            <h1>
                TODO: create a view familiar with users of certain japanese cameras
            </h1>
        </div>
    );
};

export default VeniceView;
