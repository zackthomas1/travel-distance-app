import React, { useReducer } from "react";

import StartContext from "./start-context"

const initialStartState = {
    data: {
        id: `s0000000`,
        latitude: '',
        longitude: '', 
        name: '',
    },    
    inputStates:{
        latInputHasError: false,
        longInputHasError: false,
        nameInputHasError: false, 

        isLatInputTouched: false, 
        isLongInputTouched: false, 
        isNameInputTouched: false, 
    },
}

const StartProvider = (props) => {

    const [startState, dispatch] = useReducer(StartStateReducer, initialStartState)
    
    // Handlers
    const ActionHandler = (action) => {
        dispatch(action)
    }

    const startContext = {
        ...startState, 
        action: ActionHandler,
    }
    return(
        <StartContext.Provider value={startContext}>
            {props.children}
        </StartContext.Provider>
    );
}

export default StartProvider;

const StartStateReducer = (state, action) => {
    if(action.type === 'INPUT'){
        if(action.field === 'LAT'){
            const isLatInputValid = validateLatitudeValue(action.updatedValue);
            const hasError = (!isLatInputValid && state.inputStates.isLatInputTouched);

            return{
                data: {
                    id: state.data.id,
                    latitude: action.updatedValue,
                    longitude: state.data.longitude, 
                    name: state.data.name,
                },
                inputStates:{
                    latInputHasError:  hasError,
                    longInputHasError: state.inputStates.longInputHasError,
                    nameInputHasError: state.inputStates.nameInputHasError,
            
                    isLatInputTouched: state.inputStates.isLatInputTouched, 
                    isLongInputTouched: state.inputStates.isLatInputTouched, 
                    isNameInputTouched: state.inputStates.isLatInputTouched, 
                },
            }
        }else if(action.field === 'LONG'){
            const isLongInputValid = validateLongitudeValue(action.updatedValue);
            const hasError = (!isLongInputValid && state.inputStates.isLongInputTouched)

            return{
                data: {
                    id: state.data.id,
                    latitude: state.data.latitude,
                    longitude: action.updatedValue, 
                    name: state.data.name,
                },
                inputStates:{
                    latInputHasError: state.inputStates.latInputHasError,
                    longInputHasError: hasError,
                    nameInputHasError: state.inputStates.nameInputHasError, 
            
                    isLatInputTouched: state.inputStates.isLatInputTouched, 
                    isLongInputTouched: state.inputStates.isLatInputTouched, 
                    isNameInputTouched: state.inputStates.isLatInputTouched, 
                },
            }
        }else if(action.field === 'NAME'){
            const isNameInputValid = validateNameValue(action.updatedValue);
            const hasError = (!isNameInputValid && state.inputStates.isNameInputTouched)
            
            return{
                data: {
                    id: state.data.id,
                    latitude: state.data.latitude,
                    longitude: state.data.longitude, 
                    name: action.updatedValue,
                },    
                inputStates:{
                    latInputHasError: state.inputStates.latInputHasError,
                    longInputHasError: state.inputStates.longInputHasError,
                    nameInputHasError: hasError, 
            
                    isLatInputTouched: state.inputStates.isLatInputTouched, 
                    isLongInputTouched: state.inputStates.isLatInputTouched, 
                    isNameInputTouched: state.inputStates.isLatInputTouched, 
                },
            }
        }
    }else if(action.type === 'BLUR'){
        if(action.field === 'LAT'){
            const isLatInputValid = validateLatitudeValue(state.data.latitude);

            return{
                data: {
                    id: state.data.id,
                    latitude: state.data.latitude,
                    longitude: state.data.longitude, 
                    name: action.updatedValue,
                },    
                inputStates:{
                    latInputHasError: !isLatInputValid,
                    longInputHasError: state.inputStates.longInputHasError,
                    nameInputHasError: state.inputStates.nameInputHasError, 
            
                    isLatInputTouched: true, 
                    isLongInputTouched: state.inputStates.isLongInputTouched,  
                    isNameInputTouched: state.inputStates.isNameInputTouched, 
                },
            }
        }else if(action.field === 'LONG'){
            const isLongInputValid = validateLongitudeValue(state.data.longitude);

            return{
                data: {
                    id: state.data.id,
                    latitude: state.data.latitude,
                    longitude: state.data.longitude, 
                    name: action.updatedValue,
                },    
                inputStates:{
                    latInputHasError: state.inputStates.latInputHasError,
                    longInputHasError: !isLongInputValid,
                    nameInputHasError: state.inputStates.nameInputHasError, 
            
                    isLatInputTouched: state.inputStates.isLatInputTouched, 
                    isLongInputTouched: true, 
                    isNameInputTouched: state.inputStates.isLatInputTouched, 
                },
            }
        }else if(action.field === 'NAME'){
            const isNameInputValid = validateNameValue(state.data.name);

            return{
                data: {
                    id: state.data.id,
                    latitude: state.data.latitude,
                    longitude: state.data.longitude, 
                    name: action.updatedValue,
                },    
                inputStates:{
                    latInputHasError: state.inputStates.latInputHasError,
                    longInputHasError: state.inputStates.longInputHasError,
                    nameInputHasError: !isNameInputValid, 
            
                    isLatInputTouched: state.inputStates.isLatInputTouched, 
                    isLongInputTouched: state.inputStates.isLongInputTouched,
                    isNameInputTouched: true, 
                },
            }
        }
    }
    else if(action.type === 'RESET'){
        return {
            ...initialStartState
        }
    }
}

const validateLatitudeValue = (input) => {
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

const validateLongitudeValue = (input) => {
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