import React, { useState } from "react"

const latitude = 0; 
const longitude = 0; 
const location = 0; 
const distance = 0; 

const Results = (props) => {
    const [isDisplayed, setIsDisplayed] = useState(false)

    const contentElements = (<React.Fragment>
            <section>{`Start Location: ${latitude} ${longitude} (${location})`}</section>
            <section>{`Closet Location: ${latitude} ${longitude} (${location}) (${distance})`}</section>
            <section>{`Farthest Location: ${latitude} ${longitude} (${location}) (${distance})`}</section>
        </React.Fragment>)

    return (
        <div>
            {isDisplayed && contentElements}
        </div>
    )
}

export default Results