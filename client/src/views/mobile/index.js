import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import { Md4K } from "react-icons/md";
import { BsSliders } from "react-icons/bs";
import { PiFloppyDiskThin } from "react-icons/pi";

import ViewportComponent from '../../components/viewport';
import Select from '../../components/select';
import RecordingIndicator from '../../components/RecordingIndicator';
import RecordingButton from './MobileRecordingButton';
import './style.css';


const MobileView = ({openSettings}) => {
    const [isRecording, setIsRecording] = useState(false);

    const clickHandler = (e) => {
        console.log(e.target);
        setIsRecording(!isRecording);
    };

    return (
        <div className="mobile-view">
            <div className="mobile-overlay">
                <div className="mobile-indicator">
                    <RecordingIndicator recording={isRecording}/>
                    {isRecording ? <div className={'mobile-recording-text'}>REC</div> : null}
                </div>
                <div className="mobile-mode">
                    <Md4K size={'2rem'}/>
                </div>
                <div className="mobile-recording" onClick={clickHandler}>
                    <RecordingButton recording={isRecording}/>
                </div>
                <div className="mobile-settings" onClick={openSettings}>
                    <FaCog className="mobile-settings-icon"/>
                </div>
                <div className={'mobile-disk'} onClick={clickHandler}>
                    <PiFloppyDiskThin className={'mobile-disk-icon'} />
                </div>
                <div className={'mobile-sliders'} onClick={openSettings}>
                    <BsSliders className={'mobile-sliders-icon'} />
                </div>
            </div>
            <ViewportComponent src="https://placehold.co/1920x1280/222222/ccc" alt=""/>
        </div>
    );
};

export default MobileView;