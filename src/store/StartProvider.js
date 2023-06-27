import React, { useState } from "react";

import StartContext from "./start-context"

const initialStartLocation = {
    id: `s0000000`,
    latitude: '',
    longitude: '', 
    name: '',
}

const StartProvider = (props) => {

    const [startLocation, setStartLocation] = useState(initialStartLocation);

    // Handlers
    const updateHandler = (ID, updatedProps) => {
        setStartLocation(updatedProps);
    }

    const resetHandler = () => {
        setStartLocation(initialStartLocation);
    }

    const startContext = {
        ...startLocation, 
        update: updateHandler,
        reset: resetHandler
    }
    return(
        <StartContext.Provider value={startContext}>
            {props.children}
        </StartContext.Provider>
    );
}

export default StartProvider;