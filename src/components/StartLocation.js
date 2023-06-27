import React, { useContext } from "react";
import LocationItem from "./LocationItem";
import StartContext from "../store/start-context";

const StartLocation = (props) => {
    const startCtx = useContext(StartContext);
    
    return(
        <div>
            <LocationItem 
                id={startCtx.id}
                latitude={startCtx.latitude} 
                longitude={startCtx.longitude} 
                name={startCtx.name} 
                onChange={startCtx.update}
            />
        </div>
    )
}

export default StartLocation;