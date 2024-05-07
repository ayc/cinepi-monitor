import React from 'react';
import { FaCog } from 'react-icons/fa';

const AlexView = ({openSettings}) => {
    return (
        <div>
            <div onClick={openSettings}>
                <FaCog className="mobile-settings-icon"/>
            </div>
            <h1>
                TODO: create a view familiar with
                users of certain cinema cameras from germany
            </h1>
        </div>
    );
};

export default AlexView;
