import React from "react"

function FeatureCol(props) {
    const content = props.content.map((paragraph, key) => <p key={key}>{paragraph}</p>)

    return (
        <div className="feature col">
            <h3 className="fs-2 display-6">{props.title}</h3>
            {content}
            <a href="#root" className="icon-link d-inline-flex align-items-center">Read more</a>
        </div>
    )
}

export default function FeatureRow(props) {
    const features = props.featureData.features.map(
        (feature, key) => <FeatureCol
            key={key}
            title={feature.title}
            content={feature.content}
            description={feature.description}
        />
    )

    return (
        <div className="container px-4 py-5">
            <h2 className="pb-2 border-bottom display-6">{props.featureData.title}</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                {features}
            </div>
        </div>
    )
}
