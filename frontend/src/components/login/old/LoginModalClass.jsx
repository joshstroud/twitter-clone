import React from 'react';

import { Link, Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { API_URL } from '../../constants';
import axios from 'axios';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = { username: '', password: '' }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.currentTarget.name]: event.target.value });
    }

    handleSubmit(event) {
        console.log('Login credentials were submitted', this.state );
        axios.post(`${API_URL}/session`, { 
            username: this.state.username, 
            password: this.state.password 
        }).then( res => {
            console.log(res);
            <Redirect to="/" />;
        });
        event.preventDefault();
    }

    render() {
        const signupPage = (window.location.hash === '#signup');


        return (
            <div className="login-container">
                <main>
                    <FontAwesomeIcon className="twitter-icon" icon={faTwitter} />
                    <h1>{ signupPage ? "Log in to Twitter" : "Sign up for Twitter" }</h1>

                    <div className="input-box">
                        <label for="username">Email or handle</label>
                        <input type="text" name="username" id="username" 
                        value={this.state.username} onChange={this.handleChange} />
                    </div>

                    <div className="input-box"> 
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" 
                        value={this.state.password} onChange={this.handleChange} />
                    </div>3

                    <div className="button primary" onClick={this.handleSubmit} >
                        { signupPage ? "Log in" : "Sign up" }
                    </div>

                    <div className="footer-link-container">
                        <Link className="footer-link" to={ signupPage ? "/login" : "/login#signup" }>
                        { signupPage ? "Sign up for Twitter" : "Log in to Twitter" } 
                        </Link>
                    </div>
                </main>
            </div>
        )
    }
}

export default LoginModal