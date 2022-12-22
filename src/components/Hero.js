import React from "react"

import FeatureRow from "./FeatureRow"

import featureData from "./feature.data"

function ReadMoreButton(props) {
    return (
        <button className="btn btn-primary" onClick={props.handleClick}>
            Read more
        </button>
    )
}

export default function Hero(props) {
    const [clicked, setClicked] = React.useState(false)

    function handleClick(event) {
        setClicked(true)
    }

    return (
        <>
            <div className="hero px-4 py-5 my-5 text-center">
                <h1 className="display-5">{props.title}</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">{props.description}</p>
                    {!clicked && <ReadMoreButton handleClick={handleClick} />}
                </div>
            </div>
            {clicked && <FeatureRow featureData={featureData} />}
        </>
    )
}
