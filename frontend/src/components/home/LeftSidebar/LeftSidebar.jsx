import React from 'react';

import ProfileBadge from './ProfileBadge';

function LeftSidebar() {

    return (
        <div className="sidebar-container"> 
            <div className="twitter-icon">
            Twitter icon 
            </div>
            
            <div className="sidebar-item-container">
                <img src=""></img>
                <div className="sidebar-item-text">Home</div>
            </div>

            <div className="tweet-button-container">
                <div className="text">Tweet</div>
            </div>

            <ProfileBadge />
        </div>
    )
}

export default LeftSidebar;