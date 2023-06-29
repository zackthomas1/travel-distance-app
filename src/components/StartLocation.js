import React, { useContext } from "react";
import LocationItem from "./LocationItem";
import StartContext from "../store/start-context";

const StartLocation = (props) => {
    const startCtx = useContext(StartContext);
    
    return(
        <div>
            <LocationItem 
                id={startCtx.data.id}
                latitude={startCtx.data.latitude} 
                longitude={startCtx.data.longitude} 
                name={startCtx.data.name} 
                onChange={startCtx.update}
            />
        </div>
    )
}

export default StartLocation;