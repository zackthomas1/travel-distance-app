import React, { useState } from "react";

const LocationItem = (props) => {

    // Handlers
    const blurLatitudeHandler = (event) => {
        props.onSetLatInputTouched(true); 
        const isLatInputValid = props.validateLatValueFN(event.target.value);
        props.onSetLatInputHasError(!isLatInputValid);
    }

    const changeLatitudeHandler = (event) => {
        const isLatInputValid = props.validateLatValueFN(event.target.value);
        props.onSetLatInputHasError(!isLatInputValid && props.isLatInputTouched);

        props.onChange(props.id, {
            id: props.id,
            latitude: event.target.value,
            longitude: props.longitude,
            name: props.name,
        });
    }

    const blurLongitudeHandler = (event) => {
        props.onSetLongInputTouched(true); 
        const isLongInputValid = props.validateLongValueFN(event.target.value);
        props.onSetLongInputHasError(!isLongInputValid);
    }

    const changeLongitudeHandler = (event) => {
        const isLongInputValid = props.validateLongValueFN(event.target.value);
        props.onSetLongInputHasError(!isLongInputValid && props.isLongInputTouched);

        props.onChange(props.id, {
            id: props.id,
            latitude: props.latitude,
            longitude: event.target.value,
            name: props.name,
        });
    }

    const blurNameHandler = (event) => {
        props.onSetNameInputTouched(true); 
        const isNameInputValid = props.validateNameValueFN(event.target.value);
        props.onSetNameInputHasError(!isNameInputValid);
    }

    const changeNameHandler = (event) => {
        const isNameInputValid = props.validateNameValueFN(event.target.value);
        props.onSetNameInputHasError(!isNameInputValid && props.isNameInputTouched);

        props.onChange(props.id, {
            id: props.id,
            latitude: props.latitude,
            longitude: props.longitude,
            name: event.target.value,
        });
    }
      
    return(
        <div className='control-group'>
            <div className='form-control'>
                <label htmlFor={`latitude_${props.id}`}>Latitude</label>
                <input 
                    type="text" 
                    name={`latitude_${props.id}`} 
                    id={`latitude_${props.id}`} 
                    onChange={changeLatitudeHandler}
                    onBlur={blurLatitudeHandler}
                    value={props.latitude} 
                    placeholder="ex. 33.9425/N"
                />
                {props.latInputHasError && <p className="error-text">Latitude Input Invalid</p>}
            </div>

            <div className='form-control'>
                <label htmlFor={`longitude_${props.id}`}>Longitude</label>
                <input 
                    type="text" 
                    name={`longitude_${props.id}`} 
                    id={`longitude_${props.id}`}
                    onChange={changeLongitudeHandler} 
                    onBlur={blurLongitudeHandler}
                    value={props.longitude} 
                    placeholder="ex. 118.4081/W"
                />
                {props.longInputHasError && <p className="error-text">Longitude Input Invalid</p>}
            </div>

            <div className='form-control'>
                <label htmlFor={`location_${props.id}`}>Location Name</label>
                <input 
                    type="text" 
                    name={`location_${props.id}`} 
                    id={`location_${props.id}`}
                    onChange={changeNameHandler}
                    onBlur={blurNameHandler}
                    value={props.name} 
                    placeholder="ex. Los Angeles"
                />      
                {props.nameInputHasError && <p className="error-text">Location Input Invalid</p>}
            </div>
        </div>
    ); 
} 

export default LocationItem;