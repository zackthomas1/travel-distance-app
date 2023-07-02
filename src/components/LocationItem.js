import React from "react";

const LocationItem = (props) => {

    // Handlers
    const blurLatHandler = () => {
        props.onAction({
            id: props.id, 
            type: 'BLUR', 
            field: 'LAT',
        })
    }

    const changeLatHandler = (event) => {
        props.onAction({
            id: props.id, 
            type: 'INPUT', 
            field : 'LAT',
            updatedValue: event.target.value,}
        )
    }

    const blurLongHandler = () => {
        props.onAction({
            id: props.id, 
            type: 'BLUR', 
            field: 'LONG',
        })
    }

    const changeLongHandler = (event) => {
        props.onAction({
            id: props.id, 
            type: 'INPUT', 
            field : 'LONG',
            updatedValue: event.target.value,}
        )
    }

    const blurNameHandler = () => {
        props.onAction({
            id: props.id, 
            type: 'BLUR', 
            field: 'NAME',
        })
    }

    const changeNameHandler = (event) => {  
        props.onAction({
            id: props.id, 
            type: 'INPUT', 
            field : 'NAME',
            updatedValue: event.target.value,}
        )
    }
      
    return(
        <div className='control-group'>
            <div className='form-control'>
                <label htmlFor={`latitude_${props.id}`}>Latitude</label>
                <input 
                    type="text" 
                    name={`latitude_${props.id}`} 
                    id={`latitude_${props.id}`} 
                    onChange={changeLatHandler}
                    onBlur={blurLatHandler}
                    value={props.latitude} 
                    placeholder="ex. 33.9425/N"
                />
                {props.inputStates.latInputHasError && <p className="error-text">Latitude Input Invalid</p>}
            </div>

            <div className='form-control'>
                <label htmlFor={`longitude_${props.id}`}>Longitude</label>
                <input 
                    type="text" 
                    name={`longitude_${props.id}`} 
                    id={`longitude_${props.id}`}
                    onChange={changeLongHandler} 
                    onBlur={blurLongHandler}
                    value={props.longitude} 
                    placeholder="ex. 118.4081/W"
                />
                {props.inputStates.longInputHasError && <p className="error-text">Longitude Input Invalid</p>}
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
                {props.inputStates.nameInputHasError && <p className="error-text">Location Input Invalid</p>}
            </div>
        </div>
    ); 
} 

export default LocationItem;