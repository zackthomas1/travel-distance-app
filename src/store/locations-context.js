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

            isValid: false,
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

            isValid: false,
        },
    },
    addTarget: () => {}, 
    removeTarget: () => {},  
    updateInput: () => {}, 
    reset: () => {}, 
})

export default LocationsContext;