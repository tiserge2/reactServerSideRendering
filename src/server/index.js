import express from "express"
import React from "react"
import App from "../shared/App"
import routes from "../shared/routes"
import { StaticRouter, matchPath } from "react-router-dom"
import { renderToString } from "react-dom/server"

const app = express()
app.use(express.static("public"))

app.get("*", (req, res) => {
    const activeRoute = routes.find(route => matchPath(req.url, route))
    const markup = renderToString(
        <StaticRouter location={req.url} context>
            <App />
        </StaticRouter>
    )

    res.send(
        `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Universal React</title>
                <script src="/bundle.js" defer></script>
            </head>
            <body>
                <div id="Root">${markup}</div>
            </body> 
        </html>        
    `
    )
})

app.listen(process.env.PORT || 3000,() => {
    console.log("Server is listening on " + process.env.PORT)
})