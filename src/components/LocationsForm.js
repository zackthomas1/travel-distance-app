import React, { useContext } from "react";

import StartLocation from "./StartLocation";
import TargetLocation from "./TargetLocation";
import TargetsContext from "../store/target-context";
import StartContext from "../store/start-context";
import { Haversine } from "../utility";

const LocationsForm = (props) => {
    
    // States
    const startCtx = useContext(StartContext);
    const targetsCtx = useContext(TargetsContext);
    
    // 

    // Handlers
    const resetFormHandler = () => {
        startCtx.reset();
        targetsCtx.reset();
        props.onSetResultDisplay(false);
    }

    // Set form validity
    let formIsValid = false; 
    if(true){   // TO-DO: complete validity test
        formIsValid = true;
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        if(!formIsValid){
            return;
        }

        let targetDistances = [];

        // call haversine method to calculate distance from start to each target
        Object.values(targetsCtx.targets).forEach((target)=>{
            let d = Haversine(
                {lat: startCtx.data.latitude, long: startCtx.data.longitude}, 
                {lat:target.latitude, long: target.longitude}
            );
                
            targetDistances.push({id: target.id, distance: d})
        });
  
        const results = {
            closest: FindClosestTarget(targetDistances),
            furthest: FindFurthestTarget(targetDistances),
        }

        // 
        props.onSetResults(results);
        props.onSetResultDisplay(true);
    }

    return(
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <div>
                    <h2>Starting Location:</h2>
                    <StartLocation />
                </div>

                <div>
                    <h2>Target Locations:</h2>
                    {Object.values(targetsCtx.targets).map((target) => {
                        return(
                            <TargetLocation
                                key={target.id} 
                                data={target} 
                            />)
                    })}
                    <button type="button" onClick={targetsCtx.add}>Add New Destination</button>
                </div>

                <div>
                    <button type="button" onClick={resetFormHandler}>Reset Form</button>
                    <button type="submit">Submit Form</button>
                </div>
            </form>
        </React.Fragment>

    );
}

export default LocationsForm

const FindClosestTarget = (targetsArray) => {
    let closestTarget = {};
    let minimumDistance = Number.POSITIVE_INFINITY;

    for(let target of targetsArray){
        if(target.distance < minimumDistance){
            minimumDistance = target.distance;
            closestTarget = target;
        }
    }

    return closestTarget;
}

const FindFurthestTarget = (targetsArray) => {
    let farthestTarget = {};
    let maximumDistance = 0; 

    for(let target of targetsArray){
        if(target.distance > maximumDistance){
            maximumDistance = target.distance;
            farthestTarget = target;
        }
    }
    
    return farthestTarget;
}