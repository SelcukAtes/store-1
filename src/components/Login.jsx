import React, { Component } from 'react';

import './Login.css'

export class Login extends Component {
    state = {
        userName: '',
        password: '',
    }

    handleSubmit = event => {

        this.setState({ userName: '', password: '' })

        event.preventDefault();
    }

    handeChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const { userName, password } = this.state;

        return (
            <form className="event-form" onSubmit={this.handleSubmit}>
                <input className="username-input"
                    name="userName"
                    type="text"
                    placeholder="User Name"
                    value={userName}
                    onChange={this.handeChange}
                ></input>
                <input className="password-input"
                    name="password"
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={this.handeChange}
                ></input>
                <button type="submit">Login</button>
            </form>
        )
    }
}

export default Login