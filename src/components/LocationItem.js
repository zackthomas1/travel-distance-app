import React from "react";

const LocationItem = (props) => {
    
    // Handlers
    const changeLatitudeHandler = (event) => {
        props.onChange(props.id, {
            id: props.id,
            latitude: event.target.value,
            longitude: props.longitude,
            name: props.name,
        });
    }

    const changeLongitudeHandler = (event) => {
        props.onChange(props.id, {
            id: props.id,
            latitude: props.latitude,
            longitude: event.target.value,
            name: props.name,
        });
    }

    const changeNameHandler = (event) => {
        props.onChange(props.id, {
            id: props.id,
            latitude: props.latitude,
            longitude: props.longitude,
            name: event.target.value,
        });
    }
      
    return(
        <React.Fragment>
            <label htmlFor={`latitude_${props.id}`}>Latitude</label>
            <input 
                type="text" 
                name={`latitude_${props.id}`} 
                id={`latitude_${props.id}`} 
                onChange={changeLatitudeHandler} 
                value={props.latitude} 
            />
            
            <label htmlFor={`longitude_${props.id}`}>Longitude</label>
            <input 
                type="text" 
                name={`longitude_${props.id}`} 
                id={`longitude_${props.id}`}
                onChange={changeLongitudeHandler} 
                value={props.longitude} 
            />

            <label htmlFor={`location_${props.id}`}>Location Name</label>
            <input 
                type="text" 
                name={`location_${props.id}`} 
                id={`location_${props.id}`}
                onChange={changeNameHandler} 
                value={props.name} 
            />            
        </React.Fragment>
    ); 
} 

export default LocationItem;