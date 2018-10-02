import React, { Component } from "react"
import routes from "./routes"
import  { Switch, Route } from "react-router-dom"

const App = () => {
    return (
        <Switch>
            {routes.map((route, i) => <Route key={i} {...route} />)}
        </Switch>
    )
}

export default App