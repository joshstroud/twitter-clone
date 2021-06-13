import React, { useState, useEffect } from 'react';

import { Link, Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

// import { process.env.REACT_APP_API_URL } from '../../constants';
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

    const [flashMessage, setFlashMessage] = useState(null);

    // const validateInputs = () => {
    //     const passwordRegEx = /^(?=.*[A-Za-z])[A-Za-z\d]{6,}$/
    //     if (!passwordRegEx.test(password.toLowerCase())) {
    //         return 'Not a valid password. Password is minimum six characters.';
    //     }

    //     return null;
    // }

    const handleSubmit = (event) => {
        // const validationMsg = validateInputs();

        // if (validationMsg) {
        //     setFlashMessage(validationMsg);
        //     return;
        // }

        // console.log('Login credentials were submitted', `${username}: ${password}`);
        axios.post(`${process.env.REACT_APP_API_URL}/session`, {
            username,
            password
        }).then(res => setRedirect(true))
        .catch(error => {
            // console.log(error.response);
            setFlashMessage(error.response.data.error);
        })
    }
    
    // const signupPage = (window.location.hash === '#signup');

    return (
        <div className="login-container">
            { redirect ? <Redirect to="/" /> : null }

            <main>
                <FontAwesomeIcon className="twitter-icon" icon={faTwitter} />
                <h1>Log in to Twitter</h1>

                <div className="flash">{flashMessage}</div>

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
                    Log in
                </div>

                <div className="footer-link-container">
                    <Link className="footer-link" to="/signup">
                    Sign up for Twitter
                    </Link>
                </div>
                {redirect}
            </main>
        </div>
    )
}

export default LoginModal