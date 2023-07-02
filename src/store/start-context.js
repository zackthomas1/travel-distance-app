import { createContext } from "react";

const StartContext = createContext({
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
    action: (action) => {}
}); 

export default StartContext;