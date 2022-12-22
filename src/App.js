import React from "react"

import FeatureRow from "./components/FeatureRow"
import Hero from "./components/Hero"

import "./app.css"

import featureData from "./components/feature.data"

export default function App() {
    return (
        <>
            <main>
                <Hero title="Accend" description="Your favorite project." />
                <FeatureRow featureData={featureData} />
            </main>
        </>
    )
}
