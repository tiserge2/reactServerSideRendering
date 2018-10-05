import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default class Login extends Component {
    constructor(props) {
        super(props)
    }
  
    render() {
        return(
            <div id="login-form-container">
                <form id="login-form">
                    <p id="login-text">Please login </p>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <input type="submit" value="Get Connected" />
                </form>
                <Link id="return-link-login" to="/">
                    <p>Return to home</p>
                </Link>
            </div>
        )
    }
}

