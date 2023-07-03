import { createContext } from "react";

const TargetsContext = createContext({
    count:1,
    targets: {
        t000000: {
            data: {
                id: 't000000',
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
        },
    },
    add: () => {},
    remove: (ID) => {},
    update: (ID, updatedState) => {},
    reset: () => {},
    action: (action) => {},
});

export default TargetsContext