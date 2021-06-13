import React, { useState, useEffect } from 'react';

import { Link, Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

// import { process.env.REACT_APP_API_URL } from '../../constants';
import axios from 'axios';

function Signup(props) {

    const [email, setEmail] = useState('');

    const [handle, setHandle] = useState('');

    const [password, setPassword] = useState('');


    const handleChange = (event) => {
        if (event.currentTarget.name === 'email') {
            setEmail(event.target.value);
        } else if (event.currentTarget.name === 'password') {
            setPassword(event.target.value);
        } else if (event.currentTarget.name === 'handle') {
            setHandle(event.target.value);
        }
    }

    const [flashMessage, setFlashMessage] = useState(null);

    const [redirect, setRedirect] = useState(false);

    const validateInputs = () => {
        const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegEx.test(email.toLowerCase())) {
            return 'Not a valid email';
        }

        const handleRegEx = /^[0-9a-zA-Z]+$/;
        if (!handleRegEx.test(handle.toLowerCase())) {
            return 'Not a valid handle. Handle can only be a-z letters and numbers.';
        }

        const passwordRegEx = /^(?=.*[A-Za-z])[A-Za-z\d]{6,}$/
        if (!passwordRegEx.test(password.toLowerCase())) {
            return 'Not a valid password. Password is minimum six characters.';
        }

        return null;
    }

    const handleSubmit = (event) => {
        const validationMsg = validateInputs();

        if (validationMsg) {
            setFlashMessage(validationMsg);
            return;
        }
        
        // console.log('Login credentials were submitted', `${email}: ${password}`);
        axios.post(`${process.env.REACT_APP_API_URL}/users`, {
            email,
            handle,
            password
        }).then(res => {
            // console.log(email)
            return axios.post(`${process.env.REACT_APP_API_URL}/session`, {
                username: email,
                password
            });
        }).then(res => setRedirect(true))
        .catch(error => {
            // console.log(error.response.data.error);
            setFlashMessage(error.response.data.error);
        })
    }
    
    // const signupPage = (window.location.hash === '#signup');

    return (
        <div className="login-container">
            { redirect ? <Redirect to="/" /> : null }

            <main>
                <FontAwesomeIcon className="twitter-icon" icon={faTwitter} />
                <h1>Sign up for Twitter</h1>

                <div className="flash">{flashMessage}</div>
                <div className="input-box">
                    <label htmlFor="email">Email or handle</label>
                    <input type="email" name="email" id="email" 
                    value={email} onChange={handleChange} />
                </div>

                <div className="input-box">
                    <label htmlFor="handle">Handle</label>
                    <input type="text" name="handle" id="handle"
                        value={handle} onChange={handleChange} />
                </div>

                <div className="input-box"> 
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" 
                    value={password} onChange={handleChange} />
                </div>

                <div className="button primary" onClick={handleSubmit} >
                    Sign up
                </div>

                <div className="footer-link-container">
                    <Link className="footer-link" to="/login">
                        Log in to Twitter
                    </Link>
                </div>
                {redirect}
            </main>
        </div>
    )
}

export default Signup;