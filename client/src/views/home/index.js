import React, { useEffect } from 'react';
import ViewportComponent from '../../components/viewport';
import { MdFullscreen } from "react-icons/md";

import Select from '../../components/select';
import './style.css';
import API from '../../API';
import logo from '../../assets/cinepi-logo.png'; // adjust the relative path as needed


const Home = ({openSettings}) => {
    const options = ["Option 1", "Option 2", "Option 3"]; // replace with your options

    useEffect(() => {
        try {
            const api = new API();
            api.get('/fps')
                .then(response => console.log(response))
                .catch(error => console.error('Error:', error));
        } catch (error) {
            console.error('Error:', error);
        }
    }, []);

    return (
        <div className="home-view">
            <div className="black-bar top">
                <div onClick={openSettings}>
                    <img src={logo} alt="Logo" style={{height: '40px'}}/>
                </div>
                <Select
                    title="FPS"
                    options={{
                        "24": "24",
                        "30": "30",
                        "50": "50"
                    }}
                    defaultOption={"24"}
                    onSelect={(value) => console.log(value)}
                />
                <Select
                    title="ISO"
                    options={{
                        "100": "100",
                        "200": "200",
                        "400": "400",
                        "800": "800",
                    }}
                    defaultOption={"100"}
                    onSelect={(value) => console.log(value)}
                />
                <Select
                    title="SHUTTER"
                    options={{
                        "45°": "45",
                        "90°": "90",
                        "180°": "180",
                        "360°": "360",
                    }}
                    defaultOption={"45°"}
                    onSelect={(value) => console.log(value)}
                />
                <Select
                    title="IRIS"
                    options={{
                        "f/1.4": "1.4",
                        "f/2.8": "2.8",
                        "f/4": "4",
                        "f/5.6": "5.6",
                        "f/8": "8",
                        "f/11": "11",
                        "f/16": "16",
                        "f/22": "22",
                    }}
                    defaultOption={"f/1.4"}
                    onSelect={(value) => console.log(value)}
                />
                <Select
                    title="WB"
                    options={{
                        "3200K": "3200",
                        "4500K": "4500",
                        "5600K": "5600",
                        "6500K": "6500",
                        "AUTO": "auto",
                    }}
                    defaultOption={"5600K"}
                    onSelect={(value) => console.log(value)}
                />
            </div>
            <div className="black-bar bottom">
                <div onClick={()=>{window.toggleFullScreen()}}>
                    <MdFullscreen size={'2rem'} style={{'marginLeft': '0.5rem'}}/>
                </div>
                <div>
                    <small>
                        <span>00:00:00:00</span> -
                        <span>00:00:00:00</span>
                    </small>
                </div>
                <div>
                    <button>
                        REC
                    </button>
                </div>
                <Select options={{"Option 1": "value1", "Option 2": "value2", "Option 3": "value3"}}
                        defaultOption={"Option 1"} onSelect={(value) => console.log(value)} direction="up"/>
            </div>
            <ViewportComponent src="https://placehold.co/1920x1280/3333ff/ccc" grid={true}/>
        </div>
    );
};

export default Home;
