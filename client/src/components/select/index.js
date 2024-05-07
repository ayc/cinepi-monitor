import React, { useState } from 'react';
import './style.css';

const Select = ({ options, defaultOption, onSelect, title, direction = 'down' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultOption);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (key, value) => () => {
        setSelectedOption(key);
        setIsOpen(false);
        onSelect(value); // Call the onSelect function with the selected option
    };

    const optionsList = Object.entries(options).map(([key, value]) => (
        <div onClick={onOptionClicked(key, value)} key={value}>
            {key}
        </div>
    ));

    if (direction === 'up') {
        optionsList.reverse();
    }

    const listClassName = direction === 'up' ? 'custom-select-list up' : 'custom-select-list down';

    return (
        <div className="custom-select-wrapper">
            <div className="custom-select-header" onClick={toggling}>
                <small>{title}</small>
                <div>
                    {selectedOption}
                </div>
            </div>
            {isOpen && <div className={listClassName}>{optionsList}</div>}
        </div>
    );
};

export default Select;
