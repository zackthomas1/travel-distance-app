import React, { useContext } from "react";

import StartLocation from "./StartLocation";
import TargetLocation from "./TargetLocation";
import TargetsContext from "../store/target-context";
import StartContext from "../store/start-context";

const LocationsForm = (props) => {
    
    // States
    const startCtx = useContext(StartContext);
    const targetsCtx = useContext(TargetsContext);

    console.log(startCtx);
    console.log(targetsCtx.targets);
    
    // Handlers
    const resetFormHandler = () => {
        startCtx.reset();
        targetsCtx.reset();
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        // call haversine method to calculate distance

        // pass to Results component

    }

    const targets = Object.values(targetsCtx.targets).map((target) => {
        return(
            <TargetLocation
                key={target.id} 
                data={target} 
            />)
    })

    return(
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <div>
                    <h2>Starting Location:</h2>
                    <StartLocation />
                </div>

                <div>
                    <h2>Target Locations:</h2>
                    {targets}
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