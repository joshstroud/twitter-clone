import React, { useState, useEffect } from 'react';

import { Link, Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { API_URL } from '../../constants';
import axios from 'axios';

function LoginModal(props) {

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const handleChange = (event) => {
        if (event.currentTarget.name === 'username') {
            setUsername(event.target.value);
        }

        if (event.currentTarget.name === 'password') {
            setPassword(event.target.value);
        }
    }

    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (event) => {
        // console.log('Login credentials were submitted', `${username}: ${password}`);
        axios.post(`${API_URL}/session`, {
            username,
            password
        }).then(res => setRedirect(true));
    }
    
    const signupPage = (window.location.hash === '#signup');

    if (redirect) {
        return (<Redirect to="/" />);
    }

    return (
        <div className="login-container">
            { redirect ? <Redirect to="/" /> : null }

            <main>
                <FontAwesomeIcon className="twitter-icon" icon={faTwitter} />
                <h1>{ signupPage ? "Log in to Twitter" : "Sign up for Twitter" }</h1>

                <div className="input-box">
                    <label htmlFor="username">Email or handle</label>
                    <input type="text" name="username" id="username" 
                    value={username} onChange={handleChange} />
                </div>

                <div className="input-box"> 
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" 
                    value={password} onChange={handleChange} />
                </div>3

                <div className="button primary" onClick={handleSubmit} >
                    { signupPage ? "Log in" : "Sign up" }
                </div>

                <div className="footer-link-container">
                    <Link className="footer-link" to={ signupPage ? "/login" : "/login#signup" }>
                    { signupPage ? "Sign up for Twitter" : "Log in to Twitter" } 
                    </Link>
                </div>
                {redirect}
            </main>
        </div>
    )
}

export default LoginModal