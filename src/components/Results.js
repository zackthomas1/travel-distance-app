import React from "react"
import Card from "./UI/Card";

import classes from './Results.module.css'

const Results = (props) => {
    //
    const isResultsEmpty = !(props.results.length > 0);

    const content_element = props.results.map((result) => {
        const {
            id,
            startLat,
            startLong,
            startName,
            targetLat: closestTargetLat, 
            targetLong: closestTargetLong,
            targetName: closestTargetName,
            distance: closestDistance,
        } = result.closest;
        const {


            targetLat: furthestTargetLat, 
            targetLong: furthestTargetLong,
            targetName: furthestTargetName,
            distance: furthestDistance,
        } = result.furthest;
    
        return(
            <div key={id}>
                <p>
                    {`Start Location: ${startLat} ${startLong} (${startName})`}
                </p>
                <p>
                    {`Closet Location: ${closestTargetLat} ${closestTargetLong} (${closestTargetName}) (${closestDistance.toFixed(2)} miles)`}
                </p>
                <p>
                    {`Farthest Location: ${furthestTargetLat} ${furthestTargetLong} (${furthestTargetName}) (${furthestDistance.toFixed(2)} miles)`}
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