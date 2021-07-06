import React from 'react';

function ProfileBadge() {
    const name = 'User Name';
    const handle = 'handle';

    return (
        <div className="profile-badge-container">
            <img src="" />

            <div className="text-container">
                <div className="name">{name}</div>
                <div className="handle">@{handle}</div>
            </div>

            <div className="more-button"></div>
        </div>
    )
}

export default ProfileBadge;