import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import twitterSplashImg from '../../assets/twitter-login-image.png'

class LoginSplash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="login-splash">
            <div className="splash-image">
                <img src={twitterSplashImg} />
                <FontAwesomeIcon className="twitter-icon" icon={faTwitter} />
            </div>
            <div className="splash-text-container">
                    <FontAwesomeIcon className="twitter-icon" icon={faTwitter} />
                    <h1>Happening now</h1>
                    <h3> Join Twitter today.</h3>

                    <a href="#">
                        <div className="splash-button sign-up-button">Sign up</div>
                    </a>
                    <a href="#">
                        <div className="splash-button log-in-button">Log in</div>
                    </a>            
                </div>
        </div>
        )
    }
}

export default LoginSplash;