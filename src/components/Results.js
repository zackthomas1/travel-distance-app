import React, { useContext } from "react"
import Card from "./UI/Card";
import LocationsContext from "../store/locations-context";

import classes from './Results.module.css'

const Results = (props) => {
    //
    const locationsCtx = useContext(LocationsContext);
    const isResultsEmpty = !(props.results.length > 0);

    const content_element = props.results.map((result) => {
        const { startId:closestStartId, targetId: closestTargetId, distance: closestDistance } = result.closest;
        const {                         targetId: furthestTargetId, distance: furthestDistance } = result.furthest;
    
        return(
            <div key={closestStartId}>
                <p>
                    {`Start Location: ${locationsCtx.starts[closestStartId].latitude} ${locationsCtx.starts[closestStartId].longitude} (${locationsCtx.starts[closestStartId].name})`}
                </p>
                <p>
                    {`Closet Location: ${locationsCtx.targets[closestTargetId].latitude} ${locationsCtx.targets[closestTargetId].longitude} (${locationsCtx.targets[closestTargetId].name}) (${closestDistance.toFixed(2)} miles)`}
                </p>
                <p>
                    {`Farthest Location: ${locationsCtx.targets[furthestTargetId].latitude} ${locationsCtx.targets[furthestTargetId].longitude} (${locationsCtx.targets[furthestTargetId].name}) (${furthestDistance.toFixed(2)} miles)`}
                </p>                
            </div>
        );
    }); 

    const test = (
        <Card className={classes.results}>
            <h2>Results</h2>
            {content_element}
        </Card>
    )

    return ( 
        <React.Fragment>
            {!isResultsEmpty && test}
        </React.Fragment>
    )
}

export default Results