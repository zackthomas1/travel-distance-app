import React from "react";
import LocationItem from "./LocationItem";

const LocationForm = (props) => {

    const onAddDestinationHandler = () => {

    }
    
    const onClearHandler = () => {

    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();

    }

    return(
        <React.Fragment>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <h2>Starting Location:</h2>
                    <LocationItem type="starting" id="s1"/>
                </div>

                <div>
                    <h2>Destination:</h2>
                    <LocationItem type="target" id="t1"/>
                    <button onClick={onAddDestinationHandler}>Add New Destination</button>
                </div>

                <div>
                    <button onClick={onClearHandler}>Clear Form</button>
                    <button type="submit">Submit Form</button>
                </div>
            </form>
        </React.Fragment>

    );
}

export default LocationForm