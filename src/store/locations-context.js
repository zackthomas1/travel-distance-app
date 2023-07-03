import { createContext } from "react";

const LocationsContext = createContext({
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
    },
    addTarget: () => {}, 
    removeTarget: () => {},  
    updateInput: () => {}, 
    reset: () => {}, 
})

export default LocationsContext;