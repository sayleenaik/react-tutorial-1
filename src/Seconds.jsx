import React, {useEffect, useState} from "react";

const Seconds = ({freeze, show, reset}) => {

    const [now, setNow] = useState(0);
    useEffect(() => {
        const intervalID = setInterval(() => !freeze && setNow(reset ? 0 : now + 1), 1000);
        return () => clearInterval(intervalID);
    });
    return show && <div>{now}</div>
}

export default Seconds;