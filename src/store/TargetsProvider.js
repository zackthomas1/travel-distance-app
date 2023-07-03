import React, { useReducer } from "react";
import { GenerateRandomString } from '../utility'
import { validateLatitudeValue, validateLongitudeValue, validateNameValue } from "../utility";
import TargetsContext from "./target-context";

const initalTargetsState = {
    count:1,
    targets: {
        t000000: {
            data: { 
                id: 't000000',
                latitude: '',
                longitude: '', 
                name: '',
            },
            inputStates: {
                latInputHasError: false,
                longInputHasError: false,
                nameInputHasError: false, 
        
                isLatInputTouched: false, 
                isLongInputTouched: false, 
                isNameInputTouched: false, 
            },
        },
    }
}

const TargetsProvider = (props) => {
    const [targetsState, dispatchTargetsAction] = useReducer(TargetsReducer, initalTargetsState);

    // Handlers
    const addHandler = () => {dispatchTargetsAction({type:'ADD'})};
    const removeHandler = (ID) => {dispatchTargetsAction({type:'REMOVE', targetID: ID})}
    const updateHandler = (ID, updatedState) => {dispatchTargetsAction({type:'UPDATE', targetID: ID, updatedState: updatedState})}
    const resetHandler = () => {dispatchTargetsAction({type:'RESET'})}
    const actionHandler =(action) => {dispatchTargetsAction({type:'Action', action: action})}

    const targetsContext = {
        count: targetsState.count, 
        targets: targetsState.targets,
        add: addHandler,
        remove: removeHandler,
        update: updateHandler,
        reset: resetHandler,
        action: actionHandler,
    }

    return (
        <TargetsContext.Provider value={targetsContext}>
            {props.children}
        </TargetsContext.Provider>
    )
}

export default TargetsProvider;

const TargetsReducer = (state, action) => { 
    if(action.type === 'ADD'){
        const newTargetKey =`t${GenerateRandomString()}`;
        const newTargetValue = {
            data: {
                id: newTargetKey,
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

        const updatedTargets = {...state}; 
        updatedTargets.targets[newTargetKey] = newTargetValue;
        ++updatedTargets.count;

        return updatedTargets;
    } else if(action.type === 'REMOVE') {
        if(!(action.targetID in state.targets)){
            return;
        }

        const updatedTargets = {...state}; 
        delete updatedTargets.targets[action.targetID];
        --updatedTargets.count;
        
        return updatedTargets;
    } else if(action.type === 'Action') {
        if(!(action.action.id in state.targets)){
            return;
        }

        return InputStateReducer(state, action.action)
    } else if(action.type === 'RESET'){
        return {
            count:1,
            targets: {
                t000000: {
                    data: {
                        id: 't000000',
                        latitude: '',
                        longitude: '', 
                        name: '',
                    },            
                    inputStates: {
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
    }
    return;
}

const InputStateReducer = (state, action) => {
    if(action.type === 'INPUT'){
        if(action.field === 'LAT'){
            const isLatInputValid = validateLatitudeValue(action.updatedValue);
            const hasError = (!isLatInputValid && state.targets[action.id].inputStates.isLatInputTouched);

            const updatedState = {...state}; 
            updatedState.targets[action.id].data.latitude = action.updatedValue;
            updatedState.targets[action.id].inputStates.latInputHasError = hasError;

            return updatedState;
         }else if(action.field === 'LONG'){
            const isLongInputValid = validateLongitudeValue(action.updatedValue);
            const hasError = (!isLongInputValid && state.targets[action.id].inputStates.isLongInputTouched)

            const updatedState = {...state}; 
            updatedState.targets[action.id].data.longitude = action.updatedValue;
            updatedState.targets[action.id].inputStates.longInputHasError = hasError;

            return updatedState;
        }else if(action.field === 'NAME'){
            const isNameInputValid = validateNameValue(action.updatedValue);
            const hasError = (!isNameInputValid && state.targets[action.id].inputStates.isNameInputTouched)
            
            const updatedState = {...state}; 
            updatedState.targets[action.id].data.name = action.updatedValue;
            updatedState.targets[action.id].inputStates.nameInputHasError = hasError;

            return updatedState;
        }
    }else if(action.type === 'BLUR'){
        if(action.field === 'LAT'){
            const isLatInputValid = validateLatitudeValue(state.targets[action.id].data.latitude);

            const updatedState = {...state}; 
            updatedState.targets[action.id].inputStates.latInputHasError = !isLatInputValid;
            updatedState.targets[action.id].inputStates.isLatInputTouched = true;

            return updatedState;
            
        }else if(action.field === 'LONG'){
            const isLongInputValid = validateLongitudeValue(state.targets[action.id].data.longitude);

            const updatedState = {...state}; 
            updatedState.targets[action.id].inputStates.longInputHasError = !isLongInputValid;
            updatedState.targets[action.id].inputStates.isLongInputTouched = true;

            return updatedState;

        }else if(action.field === 'NAME'){
            const isNameInputValid = validateNameValue(state.targets[action.id].data.name);

            const updatedState = {...state}; 
            updatedState.targets[action.id].inputStates.nameInputHasError = !isNameInputValid;
            updatedState.targets[action.id].inputStates.isNameInputTouched = true;

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
