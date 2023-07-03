import React, { useContext } from "react";

import StartLocation from "./StartLocation";
import TargetLocation from "./TargetLocation";
import { Haversine } from "../utility";
import LocationsContext from "../store/locations-context";

const LocationsForm = (props) => {
    
    // States
    const locationsCtx = useContext(LocationsContext)
    
    // Handlers
    const resetFormHandler = () => {
        locationsCtx.reset();
        props.onSetResultDisplay(false);
    }

    // Set form validity
    let formIsValid = !(Object.values(locationsCtx.starts).some((start) => !start.isInputValid ));
    formIsValid = !(Object.values(locationsCtx.targets).some((target) => !target.isInputValid))

    const submitHandler = (event) =>{
        event.preventDefault();

        if(!formIsValid){
            return;
        }

        let targetDistances = [];
        let results = [];

        // call haversine method to calculate distance from start to each target
        Object.values(locationsCtx.starts).forEach((start) =>{
            Object.values(locationsCtx.targets).forEach((target)=>{
                let d = Haversine(
                    {lat: start.latitude, long: start.longitude}, 
                    {lat: target.latitude, long: target.longitude}
                );
                    
                targetDistances.push({startId: start.id, targetId: target.id, distance: d})
            });
            results.push({
                closest: FindClosestTarget(targetDistances),
                furthest: FindFurthestTarget(targetDistances),
            })
            targetDistances = [];
        }); 

        // 
        props.onSetResults(results);
        props.onSetResultDisplay(true);
    }

    return(
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <div className="">
                    <h2>Starting Location:</h2>
                    {Object.values(locationsCtx.starts).map((start) => {
                        return(
                            <StartLocation
                                key={start.id}
                                id={start.id}
                            />
                        )
                    })}
                </div>

                <div className="">
                    <h2>Target Locations:</h2>
                    {Object.values(locationsCtx.targets).map((target) => {
                        return(
                            <TargetLocation
                                key={target.id} 
                                id={target.id}
                            />)
                    })}
                </div>

                <div className="form-actions">
                    <button type="button" onClick={locationsCtx.addTarget}>Add New Destination</button>
                    <button type="button" onClick={resetFormHandler}>Reset Form</button>
                    <button type="submit" disabled={!formIsValid}>Submit Form</button>
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