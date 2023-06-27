import React, { useContext } from "react";
import LocationItem from "./LocationItem";
import TargetsContext from "../store/target-context";
const TargetLocation = (props) => {
    const targetsCtx = useContext(TargetsContext);

    const removeTargetHandler = () => {
        targetsCtx.remove(props.data.id);
    }

    return(
        <div>
            <LocationItem 
                id={props.data.id}
                latitude={props.data.latitude} 
                longitude={props.data.longitude} 
                name={props.data.name} 
                onChange={targetsCtx.update}
            />
            <button onClick={removeTargetHandler}>Remove Target</button>
        </div>
    )
}

export default TargetLocation;