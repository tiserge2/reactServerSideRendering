import React, { Component } from "react"
import routes from "./routes"
import  { Switch, Route } from "react-router-dom"
import "./App.css"

const App = () => {
    return (
        <div id="app-container">
            <Switch>
                {routes.map((route, i) => <Route key={i} {...route} />)}
            </Switch>
            <div id="footer">
                <p id="footer-text">
                    Coded by Sergio Suzerain OSSON
                </p>
            </div>
        </div>
    )
}

export default App