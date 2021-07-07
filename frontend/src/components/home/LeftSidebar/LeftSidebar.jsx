import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { 
    faHome, faHashtag, faBell, faEnvelope, 
    faBookmark, faListAlt, faUser, faEllipsisH
} from '@fortawesome/free-solid-svg-icons';

import { useRouteMatch, Link } from 'react-router-dom';

import ProfileBadge from './ProfileBadge';


function LeftSidebar() {
    const homeFocus = useRouteMatch('/home') ? 'active' : '';

    return (
        <div className="sidebar-container"> 



            <Link className="twitter-icon-container" to='/home'>
                <FontAwesomeIcon className="twitter-icon" icon={faTwitter} /> 
            </Link>
            
            <Link className={`sidebar-item-container ${homeFocus}`} to='/home'>
                <div className="icon-container">
                    <FontAwesomeIcon className="icon" icon={faHome} transform="up-1 left-2" />
                </div>
                <div className="sidebar-item-text">Home</div>
            </Link>

            <div className="sidebar-item-container">
                <div className="icon-container">
                    <FontAwesomeIcon className="icon" icon={faHashtag} transform="up-1" />
                </div>
                <div className="sidebar-item-text">Explore</div>
            </div>

            <div className="sidebar-item-container">
                <div className="icon-container">
                    <FontAwesomeIcon className="icon" icon={faBell} transform="up-1" />
                </div>
                <div className="sidebar-item-text">Notifications</div>
            </div>

            <div className="sidebar-item-container">
                <div className="icon-container">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} transform="up-1" />
                </div>
                <div className="sidebar-item-text">Messages</div>
            </div>

            <div className="sidebar-item-container">
                <div className="icon-container">
                    <FontAwesomeIcon className="icon" icon={faBookmark} transform="up-1 right-1.5" />
                </div>
                <div className="sidebar-item-text">Bookmarks</div>
            </div>

            <div className="sidebar-item-container">
                <div className="icon-container">
                    <FontAwesomeIcon className="icon" icon={faListAlt} transform="up-1 left-.5" />
                </div>
                <div className="sidebar-item-text">Lists</div>
            </div>

            <div className="sidebar-item-container">
                <div className="icon-container">
                    <FontAwesomeIcon className="icon" icon={faUser} transform="up-1 " />
                </div>
                <div className="sidebar-item-text">Profile</div>
            </div>

            <div className="sidebar-item-container">
                <div className="icon-container">
                    <FontAwesomeIcon className="icon" icon={faEllipsisH} transform="up-1" />
                </div>
                <div className="sidebar-item-text">More</div>
            </div>

            <div className="tweet-button">
                <div className="text">Tweet</div>
            </div>

            <ProfileBadge />
        </div>
    )
}

export default LeftSidebar;