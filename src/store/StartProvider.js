import React, { useState } from "react";

import StartContext from "./start-context"

const initialStartLocation = {
    data: {
        id: `s0000000`,
        latitude: '',
        longitude: '', 
        name: '',
    },
}

const StartProvider = (props) => {

    const [startLocation, setStartLocation] = useState(initialStartLocation);

    // Handlers
    const updateHandler = (id, updatedData) => {
        setStartLocation({...startLocation, data: updatedData});
    }

    const resetHandler = () => {
        setStartLocation(initialStartLocation);
    }

    const startContext = {
        ...startLocation, 
        update: updateHandler,
        reset: resetHandler, 
        inputValidation: {

        },
    }
    return(
        <StartContext.Provider value={startContext}>
            {props.children}
        </StartContext.Provider>
    );
}

export default StartProvider;

