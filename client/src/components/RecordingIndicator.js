import React from 'react';

const RecordingIndicator = ({ recording }) => {
    const dotStyle = {
        height: '.75rem',
        width: '.75rem',
        borderRadius: '50%',
        backgroundColor: recording ? 'rgba(255,0,0)' : 'rgb(0,255,0)',
    };

    return <div style={dotStyle}></div>;
};

export default RecordingIndicator;
