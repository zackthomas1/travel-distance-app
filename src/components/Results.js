import React, { useContext } from "react"
import StartContext from "../store/start-context";
import TargetsContext from "../store/target-context";

const Results = (props) => {
    //
    const startCtx = useContext(StartContext); 
    const targetsCtx = useContext(TargetsContext); 

    const {id: closetId, distance: closestDistance} = props.results.closest;
    const {id: furthestId, distance: furthestDistance} = props.results.furthest;

    const contentElements = <React.Fragment>
            <h2>Results:</h2>

            <section>
                {`Start Location: ${startCtx.data.latitude} ${startCtx.data.longitude} (${startCtx.data.name})`}
            </section>
            <section>
                {`Closet Location: ${targetsCtx.targets[closetId].latitude} ${targetsCtx.targets[closetId].longitude} (${targetsCtx.targets[closetId].name}) (${closestDistance.toFixed(2)} miles)`}
            </section>
            <section>
                {`Farthest Location: ${targetsCtx.targets[furthestId].latitude} ${targetsCtx.targets[furthestId].longitude} (${targetsCtx.targets[furthestId].name}) (${furthestDistance.toFixed(2)} miles)`}
            </section>
        </React.Fragment>

    return (
        <div>
            {props.isDisplayed && contentElements}
        </div>
    )
}

export default Results