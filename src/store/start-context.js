import { createContext } from "react";

const StartContext = createContext({
    id: `s0000000`,
    latitude: '',
    longitude: '', 
    name: '',
    update: (ID, updatedProps) => {},
    reset: () => {}
}); 

export default StartContext;