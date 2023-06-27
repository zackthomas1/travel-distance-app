import React, { useState } from "react";
import StartLocation from "./StartLocation";
import TargetLocation from "./TargetLocation";

const defaultStartLocation = {
    id: `s0000000`,
    latitude: '',
    longitude: '', 
    name: '',
}

const defaultTargetLocations = {
    targetsCount:1,
    targets: {
        t0000000: {
            id: 't0000000',
            latitude: '',
            longitude: '', 
            name: '',
        },
    }
}

// non-component functions
const GenerateRandomString = () => {
    return Math.random().toString(36).substring(7);
}


const Haversine = (start, target) => {

}

const LocationsForm = (props) => {
    
    // States
    const [startLocation, setStartLocation] = useState(defaultStartLocation);
    const [targetLocations, setTargetLocations] = useState(defaultTargetLocations);
    // Component Methods


    // Handlers
    const changeStartLocationHandler = (startId, updatedStart) =>{
        setStartLocation(updatedStart)
    }

    const changeTargetLocationsHandler = (targetId, updatedTarget) => {

        if(!(targetId in targetLocations.targets)){
            return;
        }   

        const updatedTargetLocations = {...targetLocations};
        updatedTargetLocations.targets[targetId] = updatedTarget;
        setTargetLocations(updatedTargetLocations);
    }

    const addTargetLocationHandler = () => {
        const newTargetkey = `t${GenerateRandomString()}`
        const newTargetData = {
            id: newTargetkey,
            latitude: '',
            longitude: '', 
            name: '',
        }

        const updatedTargetLocations = {...targetLocations}; 
        updatedTargetLocations.targets[newTargetkey] = newTargetData
        ++updatedTargetLocations.targetsCount;

        setTargetLocations(updatedTargetLocations);
    }
    
    const removeTargetLocationHandler = (targetId) => {
        if(!(targetId in targetLocations.targets)){
            return;
        }  

        const updatedTargetLocations = {...targetLocations}; 
        delete updatedTargetLocations.targets[targetId];
        --updatedTargetLocations.targetsCount;

        setTargetLocations(updatedTargetLocations);
    }

    const resetHandler = () => {
        setStartLocation({
            id: 's0000000',
            latitude: '',
            longitude: '', 
            name: '',
        });
        setTargetLocations({
            targetsCount:1,
            targets: {
                t0: {
                    id: 't0000000',
                    latitude: '',
                    longitude: '', 
                    name: '',
                },
            }
        });
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        console.log(startLocation);
        console.log(targetLocations);

        // call haversine method to calculate distance

        // pass to Results component

    }

    const targetElements =  Object.values(targetLocations.targets).map((target) => {
            return(
                <TargetLocation
                    key={target.id} 
                    data={target} 
                    onChange={changeTargetLocationsHandler}
                    onRemove={removeTargetLocationHandler}
                />
            )
        });

    return(
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <div>
                    <h2>Starting Location:</h2>
                    <StartLocation data={startLocation}  onChange={changeStartLocationHandler}/>
                </div>

                <div>
                    <h2>Target Locations:</h2>
                    {targetElements}
                    <button type="button" onClick={addTargetLocationHandler}>Add New Destination</button>
                </div>

                <div>
                    <button type="button" onClick={resetHandler}>Reset Form</button>
                    <button type="submit">Submit Form</button>
                </div>
            </form>
        </React.Fragment>

    );
}

export default LocationsForm