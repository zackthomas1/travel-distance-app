import React from "react";

import classes from './Location.module.css'

const Location = (props) => {

    const{id, latitude, longitude, name} = props.data;
    
    // Handlers
    const blurLatHandler = () => {
        props.onAction({
            id: id,
            type: 'BLUR', 
            field: 'LAT',
            locationType: props.type,
        })
    }

    const changeLatHandler = (event) => {
        props.onAction({
            id: id, 
            type: 'INPUT', 
            field : 'LAT',
            locationType: props.type,
            updatedValue: event.target.value,
        })
    }

    const blurLongHandler = () => {
        props.onAction({
            id: id, 
            type: 'BLUR', 
            field: 'LONG',
            locationType: props.type,
        })
    }

    const changeLongHandler = (event) => {
        props.onAction({
            id: id, 
            type: 'INPUT', 
            field : 'LONG',
            locationType: props.type,
            updatedValue: event.target.value,
        })
    }

    const blurNameHandler = () => {
        props.onAction({
            id: id, 
            type: 'BLUR', 
            field: 'NAME',
            locationType: props.type,
        })
    }

    const changeNameHandler = (event) => {  
        props.onAction({
            id: id, 
            type: 'INPUT', 
            field : 'NAME',
            locationType: props.type,
            updatedValue: event.target.value,}
        )
    }
      
    return(
        <div className={classes.control_group}>
            <div className={classes.form_control}>
                <label htmlFor={`latitude_${id}`}>Latitude</label>
                <input 
                    type="text" 
                    name={`latitude_${id}`} 
                    id={`latitude_${id}`} 
                    onChange={changeLatHandler}
                    onBlur={blurLatHandler}
                    value={latitude} 
                    placeholder="ex. 33.9425/N"
                />
                {props.data.latInputHasError && <p className={classes.error_text}>Latitude Input Invalid</p>}
            </div>

            <div className={classes.form_control}>
                <label htmlFor={`longitude_${id}`}>Longitude</label>
                <input 
                    type="text" 
                    name={`longitude_${id}`} 
                    id={`longitude_${id}`}
                    onChange={changeLongHandler} 
                    onBlur={blurLongHandler}
                    value={longitude} 
                    placeholder="ex. 118.4081/W"
                />
                {props.data.longInputHasError && <p className={classes.error_text}>Longitude Input Invalid</p>}
            </div>

            <div className={classes.form_control}>
                <label htmlFor={`location_${id}`}>Location Name</label>
                <input 
                    type="text" 
                    name={`location_${id}`} 
                    id={`location_${id}`}
                    onChange={changeNameHandler}
                    onBlur={blurNameHandler}
                    value={name} 
                    placeholder="ex. Los Angeles"
                />
                {props.data.nameInputHasError && <p className={classes.error_text}>Location Input Invalid</p>}
            </div>
        </div>
    ); 
} 

export default Location;