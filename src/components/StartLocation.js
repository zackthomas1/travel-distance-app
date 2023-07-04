import React, { useContext } from "react";
import Location from "./Location";
import LocationsContext from "../store/locations-context";

import classes from './Location.module.css'

const StartLocation = (props) => {
    const locationsCtx = useContext(LocationsContext);
    
    return(
        <div className={classes.center_content}>
            <Location 
                type='start'
                data={locationsCtx.starts[props.id]}
                onAction={locationsCtx.updateInput}
            />
        </div>
    )
}

export default StartLocation;