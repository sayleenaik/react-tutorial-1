import React from 'react';

const Stop = ({on, onToggle, name}) => {
    return  <span>
        <button name={name} onClick={onToggle}>{on ? 'Stopped' : 'Started'}</button>
    </span>;
};

export default Stop;
