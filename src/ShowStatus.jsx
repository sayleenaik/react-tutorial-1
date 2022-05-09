import React from "react";

const ShowStatus = ({on}) => {
    return <div><div>The status of show seconds is: {on ? "on" : "off"}</div></div>;
}
export default ShowStatus;