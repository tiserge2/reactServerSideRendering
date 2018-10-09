import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Register.css"

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            password1: '',
            password2: '',
            username: ''
        }
        this.handleSubmitFormRegister = this.handleSubmitFormRegister.bind(this)
    }

    handleSubmitFormRegister = () => {
        console.log("Submission is being doing...")
    }
    render() {
        return(
            <div id="register-form-container">
                <form id="register-form" onSubmit={this.handleSubmitFormRegister}>
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

