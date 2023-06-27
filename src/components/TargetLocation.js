import React from "react";
import LocationItem from "./LocationItem";

const TargetLocation = (props) => {
    
    const removeTargetHandler = () => {
        props.onRemove(props.data.id);
    }

    return(
        <div>
            <LocationItem 
                id={props.data.id}
                latitude={props.data.latitude} 
                longitude={props.data.longitude} 
                name={props.data.name} 
                onChange={props.onChange}
            />
            <button onClick={removeTargetHandler}>Remove Target</button>
        </div>
    )
}

export default TargetLocation;