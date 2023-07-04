import React, { useContext } from "react";
import Location from "./Location";
import LocationsContext from "../store/locations-context";
import Button from "./UI/Button";

import classes from './Location.module.css'

const TargetLocation = (props) => {
    const locationsCtx = useContext(LocationsContext);

    const removeTargetHandler = () => {
        locationsCtx.removeTarget(props.id);
    }

    return(
        <div>
            <div className={classes.center_content}>
                <Location 
                    type='target'
                    data={locationsCtx.targets[props.id]}
                    onAction={locationsCtx.updateInput}
                />
            </div>
            <Button onClick={removeTargetHandler}>Remove Target</Button>
        </div>
    )
}

export default TargetLocation;