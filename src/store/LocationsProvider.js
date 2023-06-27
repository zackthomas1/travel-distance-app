import React from "react";

import StartProvider from "./StartProvider";
import TargetsProvider from "./TargetsProvider";

const LocationsProvider = (props) =>{
    return(
        <StartProvider>
            <TargetsProvider>
                {props.children}
            </TargetsProvider>
        </StartProvider>
    )
}

export default LocationsProvider;