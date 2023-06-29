import React, { useReducer } from "react";
import { GenerateRandomString } from '../utility'
import TargetsContext from "./target-context";

const initalTargetsState = {
    count:1,
    targets: {
        t000000: {
            id: 't000000',
            latitude: '',
            longitude: '', 
            name: '',
        },
    }
}

const TargetsReducer = (state, action) => { 
    if(action.type === 'ADD'){
        const newTargetKey =`t${GenerateRandomString()}`;
        const newTargetValue = {
            id: newTargetKey,
            latitude: '',
            longitude: '', 
            name: '',
        }

        const updatedTargets = {...state}; 
        updatedTargets.targets[newTargetKey] = newTargetValue;
        ++updatedTargets.count;

        return updatedTargets;
    }
    else if(action.type === 'REMOVE') {
        if(!(action.targetID in state.targets)){
            return;
        }

        const updatedTargets = {...state}; 
        delete updatedTargets.targets[action.targetID];
        --updatedTargets.count;
        
        return updatedTargets;
    }
    else if(action.type === 'UPDATE') {
        if(!(action.targetID in state.targets)){
            return;
        }

        const updatedTargets = {...state}; 
        updatedTargets.targets[action.targetID] = action.updatedState; 
        
        return updatedTargets;
    }
    else if(action.type === 'RESET'){
        return {
            count:1,
            targets: {
                t000000: {
                    id: 't000000',
                    latitude: '',
                    longitude: '', 
                    name: '',
                },
            }
        }
    }
    return;
}

const TargetsProvider = (props) => {
    const [targetsState, dispatchTargetsAction] = useReducer(TargetsReducer, initalTargetsState);

    // Handlers
    const addHandler = () => {dispatchTargetsAction({type:'ADD'})};
    const removeHandler = (ID) => {dispatchTargetsAction({type:'REMOVE', targetID: ID})}
    const updateHandler = (ID, updatedState) => {dispatchTargetsAction({type:'UPDATE', targetID: ID, updatedState: updatedState})}
    const resetHandler = () => {dispatchTargetsAction({type:'RESET'})}

    const targetsContext = {
        count: targetsState.count, 
        targets: targetsState.targets,
        add: addHandler,
        remove: removeHandler,
        update: updateHandler,
        reset: resetHandler,
    }

    return (
        <TargetsContext.Provider value={targetsContext}>
            {props.children}
        </TargetsContext.Provider>
    )
}

export default TargetsProvider;