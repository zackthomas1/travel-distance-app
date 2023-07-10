import React, { useReducer } from "react";
import { GenerateRandomString } from '../utility'
import LocationsContext from "./locations-context";

const initialLocationsState = {
    starts:{
        s000000: {
            id: `s000000`,
            latitude: '',
            longitude: '', 
            name: '',

            latInputHasError: false,
            longInputHasError: false,
            nameInputHasError: false, 

            isLatInputTouched: false, 
            isLongInputTouched: false, 
            isNameInputTouched: false, 

            isInputValid: false,
        },
    },
    targets: {
        t000000: {
            id: `t000000`,
            latitude: '',
            longitude: '', 
            name: '',

            latInputHasError: false,
            longInputHasError: false,
            nameInputHasError: false, 

            isLatInputTouched: false, 
            isLongInputTouched: false, 
            isNameInputTouched: false, 

            isInputValid: false,
        },
    }
}

const LocationsProvider = (props) =>{
    const [locationsState, dispatch] = useReducer(locationsStateReducer,initialLocationsState)

    // 
    const addTargetHandler = () => {dispatch({type:'ADD'})}
    const removeTargetHandler = (targetId) => {dispatch({type:'REMOVE', targetId:targetId})}
    const updateInputHandler = (payload) => {dispatch({type:'UPDATE', payload:payload})}
    const resetHandler = () => {dispatch({type:'RESET'})}

    const locationsContext = {
        ...locationsState, 
        addTarget: addTargetHandler, 
        removeTarget: removeTargetHandler, 
        updateInput: updateInputHandler,
        reset: resetHandler, 
    }

    return(
        <LocationsContext.Provider value={locationsContext}>
            {props.children}
        </LocationsContext.Provider>
    )
}

export default LocationsProvider;

const locationsStateReducer = (state, action) => {
    if(action.type === 'ADD'){
        const newTargetKey =`t${GenerateRandomString()}`;
        const newTargetValue = {
            id: newTargetKey,
            latitude: '',
            longitude: '', 
            name: '',

            latInputHasError: false,
            longInputHasError: false,
            nameInputHasError: false, 

            isLatInputTouched: false, 
            isLongInputTouched: false, 
            isNameInputTouched: false, 

            isInputValid: false,
        }
        const updatedState = {...state}; 
        updatedState.targets[newTargetKey] = newTargetValue;

        return updatedState;
    }else if(action.type === 'REMOVE'){
        if(!(action.targetId in state.targets)){
            return;
        }

        const updatedTargets = {...state}; 
        delete updatedTargets.targets[action.targetId];

        return updatedTargets;
    }else if(action.type === 'UPDATE'){
        const locationType = action.payload.locationType + 's';
        if(action.payload.type === 'INPUT'){
            if(action.payload.field === 'LAT'){
                const isLatInputValid = validateLatLongValue(action.payload.updatedValue);
                const hasError = (!isLatInputValid && state[locationType][action.payload.id].isLatInputTouched);

                const updatedState = {...state}; 
                updatedState[locationType][action.payload.id].latitude = action.payload.updatedValue; 
                updatedState[locationType][action.payload.id].latInputHasError = hasError; 

                return updatedState;
            }else if(action.payload.field === 'LONG'){
                const isLongInputValid = validateLatLongValue(action.payload.updatedValue);
                const hasError = (!isLongInputValid && state[locationType][action.payload.id].isLongInputTouched);

                const updatedState = {...state}; 
                updatedState[locationType][action.payload.id].longitude = action.payload.updatedValue; 
                updatedState[locationType][action.payload.id].longInputHasError = hasError; 

                return updatedState;
            }else if(action.payload.field === 'NAME'){
                const isNameInputValid = validateNameValue(action.payload.updatedValue);
                const hasError = (!isNameInputValid && state[locationType][action.payload.id].isNameInputTouched);

                const updatedState = {...state}; 
                updatedState[locationType][action.payload.id].name = action.payload.updatedValue; 
                updatedState[locationType][action.payload.id].nameInputHasError = hasError; 

                return updatedState;
            }
        }else if(action.payload.type === 'BLUR'){
            if(action.payload.field === 'LAT'){
                const isLatInputValid = validateLatLongValue(state[locationType][action.payload.id].latitude);
            
                const updatedState = {...state}; 
                updatedState[locationType][action.payload.id].latInputHasError = !isLatInputValid;
                updatedState[locationType][action.payload.id].isLatInputTouched = true;

                if(isLatInputValid && 
                    !updatedState[locationType][action.payload.id].longInputHasError && 
                    !updatedState[locationType][action.payload.id].nameInputHasError) 
                {
                    updatedState[locationType][action.payload.id].isInputValid = true
                }else{
                    updatedState[locationType][action.payload.id].isInputValid = false
                }
    
                return updatedState;
            }else if(action.payload.field === 'LONG'){
                const isLongInputValid = validateLatLongValue(state[locationType][action.payload.id].longitude);
            
                const updatedState = {...state}; 
                updatedState[locationType][action.payload.id].longInputHasError = !isLongInputValid;
                updatedState[locationType][action.payload.id].isLongInputTouched = true;

                if(isLongInputValid && 
                    !updatedState[locationType][action.payload.id].latInputHasError && 
                    !updatedState[locationType][action.payload.id].nameInputHasError) 
                {
                    updatedState[locationType][action.payload.id].isInputValid = true
                }else{
                    updatedState[locationType][action.payload.id].isInputValid = false
                }

                return updatedState;
            }else if(action.payload.field === 'NAME'){
                const isNameInputValid = validateNameValue(state[locationType][action.payload.id].name);
            
                const updatedState = {...state}; 
                updatedState[locationType][action.payload.id].nameInputHasError = !isNameInputValid;
                updatedState[locationType][action.payload.id].isNameInputTouched = true;

                if(isNameInputValid && 
                    !updatedState[locationType][action.payload.id].latInputHasError && 
                    !updatedState[locationType][action.payload.id].longInputHasError) 
                {
                    updatedState[locationType][action.payload.id].isInputValid = true
                }else{
                    updatedState[locationType][action.payload.id].isInputValid = false
                }

                return updatedState;
            }
        }
    }else if(action.type === 'RESET'){
        return {
            starts:{
                s000000: {
                    id: `s000000`,
                    latitude: '',
                    longitude: '', 
                    name: '',
        
                    latInputHasError: false,
                    longInputHasError: false,
                    nameInputHasError: false, 
        
                    isLatInputTouched: false, 
                    isLongInputTouched: false, 
                    isNameInputTouched: false, 
        
                    isInputValid: false,
                },
            },
            targets: {
                t000000: {
                    id: `t000000`,
                    latitude: '',
                    longitude: '', 
                    name: '',
        
                    latInputHasError: false,
                    longInputHasError: false,
                    nameInputHasError: false, 
        
                    isLatInputTouched: false, 
                    isLongInputTouched: false, 
                    isNameInputTouched: false, 
        
                    isInputValid: false,
                },
            }
        }
    }
}

const validateLatLongValue = (input) => {
    // ex. '188.35/S'
    const pattern = /^\d+(\.\d+)?\/[A-Za-z]$/
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