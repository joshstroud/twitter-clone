import React from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import twitterSplashImg from '../../assets/twitter-login-image.png'

function Splash(props) {
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

                    <Link to="/signup" >
                        <div className="button primary">Sign up</div>
                    </Link> 
                    <Link to="/login" >
                        <div className="button secondary">Log in</div>
                    </Link>
                </div>
        </div>
        );
}

export default Splash;