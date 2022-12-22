import React from "react"

export default function Hero(props) {
    const [clicked, setClicked] = React.useState(false)

    function handleClick(event) {
        setClicked(true)
    }

    return (
        <div className="hero px-4 py-5 my-5 text-center">
            <h1 className="display-5">{props.title}</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">{props.description}</p>
                <button
                    className={clicked ? "btn btn-primary disabled" : "btn btn-primary"}
                    onClick={handleClick}
                >
                    {clicked ? "Coming soon..." : "Read more"}
                </button>
            </div>
        </div>
    )
}
