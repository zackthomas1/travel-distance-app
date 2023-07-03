import React, { useContext } from "react";
import Location from "./Location";
import LocationsContext from "../store/locations-context";

const TargetLocation = (props) => {
    const locationsCtx = useContext(LocationsContext);


    const removeTargetHandler = () => {
        locationsCtx.removeTarget(props.id);
    }

    return(
        <div>
            <Location 
                type='target'
                data={locationsCtx.targets[props.id]}
                onAction={locationsCtx.updateInput}
            />
            <button onClick={removeTargetHandler}>Remove Target</button>
        </div>
    )
}

export default TargetLocation;