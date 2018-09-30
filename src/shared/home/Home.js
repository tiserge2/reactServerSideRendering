import React, { Component } from "react"
import { Link } from "react-router-dom"

 class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="home-main-container">
                <div id="home-head">
                </div>
                    <h1>Welcome Dear</h1>
                <div id="home-content">
                    <a to="/about">About</a>
                    <a  to="/login">Login</a>
a                   <a  to="/register">Register</a>
                </div>
            </div>
        );
    }
}

export default Home;