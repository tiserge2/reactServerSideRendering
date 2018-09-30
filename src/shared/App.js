import React, { Component } from "react"
import Home from "./home/Home"

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Home />
            </div>
        )
    }
}