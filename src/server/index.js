import express from "express"
import React from "react"
import Home from "../shared/home/Home"
import { renderToString } from "react-dom/server"

const app = express()
app.use(express.static("public"))

app.get("*", (req, res) => {
    const markup = renderToString(<Home />)
    res.send(
        `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Universal Reacl</title>
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