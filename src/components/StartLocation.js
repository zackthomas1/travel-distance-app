import React from "react";
import LocationItem from "./LocationItem";

const StartLocation = (props) => {
    return(
        <div>
            <LocationItem 
                id={props.data.id}
                latitude={props.data.latitude} 
                longitude={props.data.longitude} 
                name={props.data.name} 
                onChange={props.onChange}
            />
        </div>
    )
}

export default StartLocation;