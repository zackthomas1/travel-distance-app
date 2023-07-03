import React, { useReducer } from "react";
import { validateLatitudeValue, validateLongitudeValue, validateNameValue } from "../utility";
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

            const updatedState = {...state}; 
            updatedState.data.latitude = action.updatedValue;
            updatedState.inputStates.latInputHasError = hasError;

            return updatedState;
         }else if(action.field === 'LONG'){
            const isLongInputValid = validateLongitudeValue(action.updatedValue);
            const hasError = (!isLongInputValid && state.inputStates.isLongInputTouched)

            const updatedState = {...state}; 
            updatedState.data.longitude = action.updatedValue;
            updatedState.inputStates.longInputHasError = hasError;

            return updatedState;
        }else if(action.field === 'NAME'){
            const isNameInputValid = validateNameValue(action.updatedValue);
            const hasError = (!isNameInputValid && state.inputStates.isNameInputTouched)
            
            const updatedState = {...state}; 
            updatedState.data.name = action.updatedValue;
            updatedState.inputStates.nameInputHasError = hasError;

            return updatedState;
        }
    }else if(action.type === 'BLUR'){
        if(action.field === 'LAT'){
            const isLatInputValid = validateLatitudeValue(state.data.latitude);

            const updatedState = {...state}; 
            updatedState.inputStates.latInputHasError = !isLatInputValid;
            updatedState.inputStates.isLatInputTouched = true;

            return updatedState;
            
        }else if(action.field === 'LONG'){
            const isLongInputValid = validateLongitudeValue(state.data.longitude);

            const updatedState = {...state}; 
            updatedState.inputStates.longInputHasError = !isLongInputValid;
            updatedState.inputStates.isLongInputTouched = true;

            return updatedState;

        }else if(action.field === 'NAME'){
            const isNameInputValid = validateNameValue(state.data.name);

            const updatedState = {...state}; 
            updatedState.inputStates.nameInputHasError = !isNameInputValid;
            updatedState.inputStates.isNameInputTouched = true;

            return updatedState;
        }
    }else if(action.type === 'RESET'){
        return {
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
    }
}

