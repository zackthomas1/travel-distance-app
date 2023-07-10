import React, { useContext, useEffect } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";
import StartLocation from "./StartLocation";
import TargetLocation from "./TargetLocation";
import { Haversine } from "../utility";
import LocationsContext from "../store/locations-context";

import classes from './LocationsForm.module.css'

const LocationsForm = (props) => {
    
    // States
    const locationsCtx = useContext(LocationsContext)

    const targetsCount = Object.values(locationsCtx.targets).length 

    // Set form validity
    let formIsValid = targetsCount > 0 &&
        !(Object.values(locationsCtx.starts).some((start) => !start.isInputValid )) &&
        !(Object.values(locationsCtx.targets).some((target) => !target.isInputValid));
   
    // Handlers
    const resetFormHandler = () => {
        locationsCtx.reset();
        props.onSetResultDisplay(false);
    }

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
                    
                targetDistances.push({
                    id: start.id,
                    startLat: start.latitude, 
                    startLong: start.longitude,
                    startName: start.name, 
                    targetLat: target.latitude, 
                    targetLong: target.longitude,
                    targetName: target.name,
                    distance: d,
                });
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
        <Card className={classes.form}>
            <form onSubmit={submitHandler}>
                <div className={classes.starts}>
                    <h2>Starting Location</h2>
                        {Object.values(locationsCtx.starts).map((start) => {
                            return(
                                <StartLocation
                                    key={start.id}
                                    id={start.id}
                                />
                            )
                        })}
                </div>

                <div className={classes.targets}>
                    <h2>Target Locations</h2>
                    {Object.values(locationsCtx.targets).map((target) => {
                        return(
                            <TargetLocation
                                key={target.id} 
                                id={target.id}
                            />)
                    })}
                    {(targetsCount < 1) && <p>Must have at least one target</p>}
                </div>

                <div className={classes.form_actions}>
                    <Button type="button" onClick={locationsCtx.addTarget}>Add New Target</Button>
                    <Button type="button" onClick={resetFormHandler}>Reset Form</Button>
                    <Button type="submit" disabled={!formIsValid}>Submit Form</Button>
                </div>
            </form>
        </Card>

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