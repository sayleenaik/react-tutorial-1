import React from 'react';

const Toggle = ({on, onToggle, name}) => {
    return  <span>
        <span>{name}: </span>
        <input type="checkbox" name={name} defaultChecked={on} onClick={onToggle}/>
    </span>;
};

export default Toggle;
