import * as React from "react";

export default function Hours(props) {

    const [hours, setHours] = React.useState('');

    const getHours = () => {
        const date = new Date();
        setHours(`${date.getHours()}:${date.getMinutes()}:${("00" + date.getSeconds().toString()).slice(-2)}`);
    }

    const init = () => {
        const interval = setInterval(() => {
            getHours();
        }, 1000);
        return () => clearInterval(interval);
    }

    init();

    return (
        <>
            {props.show && (<h2>{hours}</h2>)}
        </>
    );
}