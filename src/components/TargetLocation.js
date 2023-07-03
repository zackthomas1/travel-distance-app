import React, { useContext } from "react";
import LocationItem from "./LocationItem";
import TargetsContext from "../store/target-context";
const TargetLocation = (props) => {
    const targetsCtx = useContext(TargetsContext);

    const id = (props.target.data.id)

    const removeTargetHandler = () => {
        targetsCtx.remove(id);
    }

    return(
        <div>
            <LocationItem 
                id={id}
                latitude={props.target.data.latitude} 
                longitude={props.target.data.longitude} 
                name={props.target.data.name} 
                inputStates={targetsCtx.targets[id].inputStates}
                onAction={targetsCtx.action}
            />
            <button onClick={removeTargetHandler}>Remove Target</button>
        </div>
    )
}

export default TargetLocation;