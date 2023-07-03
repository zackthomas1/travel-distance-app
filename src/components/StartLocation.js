import React, { useContext } from "react";
import Location from "./Location";
import LocationsContext from "../store/locations-context";

const StartLocation = (props) => {
    const locationsCtx = useContext(LocationsContext);
    
    return(
        <div>
            <Location 
                type='start'
                data={locationsCtx.starts[props.id]}
                onAction={locationsCtx.updateInput}
            />
        </div>
    )
}

export default StartLocation;