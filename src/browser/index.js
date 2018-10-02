import ReactDOM from "react-dom"
import React from "react"
import App from "../shared/App"
import { BrowserRouter } from "react-router-dom"

ReactDOM.hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById("Root"))