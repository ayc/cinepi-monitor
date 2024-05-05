import React from 'react';
import { BsCameraVideoFill } from "react-icons/bs";


const RecordingButton = ({ recording }) => {
    const buttonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        backgroundColor: recording ? 'red' : 'gray',
        border: '3px solid white',
        outline: 'none',
        cursor: 'pointer',
        position: 'absolute',
        top: '-25px',
        right: '0',
    };

    return <div style={buttonStyle}>
        <BsCameraVideoFill size={20} />
    </div>;
};

export default RecordingButton;