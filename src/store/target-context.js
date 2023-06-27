import { createContext } from "react";

const TargetsContext = createContext({
    count:1,
    targets: {
        t0000000: {
            id: 't0000000',
            latitude: '',
            longitude: '', 
            name: '',
        },
    },
    add: () => {},
    remove: (ID) => {},
    update: (ID, updatedState) => {},
    reset: () => {},
});

export default TargetsContext