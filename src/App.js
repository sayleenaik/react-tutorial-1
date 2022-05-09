/**
 * A react application showing timer. A time in seconds starting from zero and going on till you reset the timer
 *
 * */

import React, {useState} from "react";
import './App.css';
import Toggle from './Toggle'
import Seconds from './Seconds';
import ShowStatus from './ShowStatus';
import Stop from './Stop';
/**
 * Create a timer app using react.
 The timer should start from zero and start/stop with reset using the start/stop toggle.
 Timer should pause when freeze toggle is enabled.
 * */
const App = () => {
    const [on, setOn] = useState(true);
    const [freeze, setFreeze] = useState(false);
    const [reset, setReset] = useState(false);
    const onShowToggle = () => setOn(on => !on)
    const onFreezeToggle = () => setFreeze(freeze => !freeze);
    const onResetToggle = () => setReset(reset => !reset);
    return <div><ShowStatus on={on}></ShowStatus>
        <Toggle onToggle={onShowToggle} on={on} name="Show"></Toggle>
        <Toggle on={freeze} onToggle={onFreezeToggle} name="Freeze"/>
        <Stop on={reset} onToggle={onResetToggle} name="Stop"/>
        {<Seconds freeze={freeze} show={on} reset={reset}></Seconds>}
    </div>;
}

export default App;
