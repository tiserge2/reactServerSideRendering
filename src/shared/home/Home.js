import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Home.css"

 class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="home-main-container">
                <div id="home-head">
                    <h1>Welcome Dear</h1>
                </div>
                <hr/>
                <div id="home-content">
                    <Link className="link" to="/about" >About</Link>
                    <Link className="link" to="/login">Login</Link>
                    <Link className="link" to="/register">Register</Link>
                    <Link className="link" to="/news">News</Link>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Home;