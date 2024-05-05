import React, { useEffect } from 'react';
import { FaCog } from 'react-icons/fa';
import ViewportComponent from '../../components/viewport';
import Select from '../../components/select';
import './style.css';
import API from '../../API';

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
                    <FaCog className="gear-icon" />
                </div>
                <div className="">
                    <a href="/">Home</a>
                </div>
                <div className="">
                    <a href="/mobile">Mobile</a>
                </div>
                <Select options={{"Option 1": "value1", "Option 2": "value2", "Option 3": "value3"}}
                        defaultOption={"Option 1"} onSelect={(value) => console.log(value)}/>
            </div>
            <div className="black-bar bottom">
            <Select options={{"Option 1": "value1", "Option 2": "value2", "Option 3": "value3"}} defaultOption={"Option 1"} onSelect={(value) => console.log(value)} direction="up" />
            </div>
            <ViewportComponent src="https://placehold.co/1920x1280/3333ff/ccc" grid={true}/>
        </div>
    );
};

export default Home;