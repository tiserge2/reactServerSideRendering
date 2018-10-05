import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Register.css"

export default class Register extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div id="register-form-container">
                <form id="register-form">
                    <p id="login-text">Please create your account </p>
                    <input type="text" placeholder="firstname" />
                    <input type="text" placeholder="lastname" />
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <input type="password" placeholder="retype password" />
                    <input type="submit" value="Create account" />
                </form>
                <Link id="return-link-register" to="/">
                    <p>Return to home</p>
                </Link>
            </div>
        )
    }
}

