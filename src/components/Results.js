import React, { useContext } from "react"
import LocationsContext from "../store/locations-context";


const Results = (props) => {
    //
    const locationsCtx = useContext(LocationsContext);
    const isResultsEmpty = !(props.results.length > 0);

    const content_element = props.results.map((result) => {
        const { startId:closestStartId, targetId: closestTargetId, distance: closestDistance } = result.closest;
        const { startId: furthestStartId, targetId: furthestTargetId, distance: furthestDistance } = result.furthest;
    
        return(
            <div>
                <section>
                    {`Start Location: ${locationsCtx.starts[closestStartId].latitude} ${locationsCtx.starts[closestStartId].longitude} (${locationsCtx.starts[closestStartId].name})`}
                </section>
                <section>
                    {`Closet Location: ${locationsCtx.targets[closestTargetId].latitude} ${locationsCtx.targets[closestTargetId].longitude} (${locationsCtx.targets[closestTargetId].name}) (${closestDistance.toFixed(2)} miles)`}
                </section>
                <section>
                    {`Farthest Location: ${locationsCtx.targets[furthestTargetId].latitude} ${locationsCtx.targets[furthestTargetId].longitude} (${locationsCtx.targets[furthestTargetId].name}) (${furthestDistance.toFixed(2)} miles)`}
                </section>                
            </div>
        );
    }); 

    return (
        <div>
            <h2>Results:</h2>
            {!isResultsEmpty && content_element}
        </div>
    )
}

export default Results