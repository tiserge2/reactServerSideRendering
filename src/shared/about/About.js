import React, { Component } from "react"
import "./About.css"
import { Link } from "react-router-dom"

export default class About extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div id="about-main-container">
                <h1 id="about-header">
                    What this is about?
                </h1>
                <p id="about-text">
                    This site is about showing to every people
                    the power of React Server Side Rendering.
                    It uses almost all the concept of SSR and
                    Isomorphic app.
                </p>
                <Link id="return-link" to="/">
                    <p>Return to home</p>
                </Link>
            </div>
        )
    }
}
