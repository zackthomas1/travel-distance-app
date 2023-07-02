import React, { useContext, useState } from "react";
import LocationItem from "./LocationItem";
import StartContext from "../store/start-context";

const StartLocation = (props) => {
    const startCtx = useContext(StartContext);
    
    const [latInputHasError, setLatInputHasError] = useState(false);
    const [longInputHasError, setLongInputHasError] = useState(false);
    const [nameInputHasError, setNameInputHasError] = useState(false);
    
    const [isLatInputTouched, setIsLatInputTouched] = useState(false);
    const [isLongInputTouched, setIsLongInputTouched] = useState(false);
    const [isNameInputTouched, setIsNameInputTouched] = useState(false);

    return(
        <div>
            <LocationItem 
                id={startCtx.data.id}
                latitude={startCtx.data.latitude} 
                longitude={startCtx.data.longitude} 
                name={startCtx.data.name} 
                onChange={startCtx.update}

                latInputHasError={latInputHasError}
                longInputHasError={longInputHasError}
                nameInputHasError={nameInputHasError}
                onSetLatInputHasError = {setLatInputHasError}
                onSetLongInputHasError = {setLongInputHasError}
                onSetNameInputHasError = {setNameInputHasError}

                isLatInputTouched = {isLatInputTouched}
                isLongInputTouched = {isLongInputTouched}
                isNameInputTouched = {isNameInputTouched}
                onSetLatInputTouched = {setIsLatInputTouched}
                onSetLongInputTouched = {setIsLongInputTouched}
                onSetNameInputTouched = {setIsNameInputTouched}

                validateLatValueFN = {validateLatiudeValue}
                validateLongValueFN = {validateLongiudeValue}
                validateNameValueFN = {validateNameValue}
            />
        </div>
    )
}

export default StartLocation;

const validateLatiudeValue = (input) => {
    // ex. '188.35/S'
    const pattern = /^\d+(\.\d+)?\/[A-Z]$/
    const regex = new RegExp(pattern);

    // ex. '-188.35
    const pattern2 = /^-?\d+(\.\d+)?$/;
    const regex2 = new RegExp(pattern2);

    input = input.trim();

    if(regex.test(input) || regex2.test(input)){
        return true; 
    }else{
        return false;
    }
}

const validateLongiudeValue = (input) => {
    // ex. '188.35/S'
    const pattern = /^\d+(\.\d+)?\/[A-Z]$/
    const regex = new RegExp(pattern);

    // ex. '-188.35
    const pattern2 = /^-?\d+(\.\d+)?$/;
    const regex2 = new RegExp(pattern2);

    input = input.trim();

    if(regex.test(input) || regex2.test(input)){
        return true; 
    }else{
        return false;
    }
}

const validateNameValue = (input) => {
    return input.length > 0;
}