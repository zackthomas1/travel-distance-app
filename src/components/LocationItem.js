import React from "react";

const LocationItem = (props) => {

    const removeDestinationHandler = () =>{

    }

    const onChangeHandler = () =>{

    }
    
    return(
        <div>
            <label htmlFor={`latitude_${props.id}`}>Latitude</label>
            <input type="number" name={`latitude_${props.id}`} id={`latitude_${props.id}`} onChange={onChangeHandler} value={4} def/>
            
            <label htmlFor={`longitude_${props.id}`}>Latitude</label>
            <input type="number" name={`longitude_${props.id}`} id={`longitude_${props.id}`}/>

            <label htmlFor={`location_${props.id}`}>Location Name</label>
            <input type="text" name={`location_${props.id}`} id={`location_${props.id}`}/>
            
            {props.type === 'target' && <button onClick={removeDestinationHandler}>Remove Destination</button>}
        </div>
    ); 
} 

export default LocationItem;