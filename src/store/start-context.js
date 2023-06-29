import { createContext } from "react";

const StartContext = createContext({
    data: {
        id: `s0000000`,
        latitude: '',
        longitude: '', 
        name: '',
    },
    update: (id, updatedData) => {},
    reset: () => {}
}); 

export default StartContext;