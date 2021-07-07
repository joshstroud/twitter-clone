import React from 'react';

import dummyProfileImage from '../../../assets/dummy-user-icon-large.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

function ProfileBadge() {
    const name = 'User Name';
    const handle = 'handle';

    return (
        <div className="profile-badge-container">
            <img src={dummyProfileImage} alt='profile-image' />

            <div className="text-container">
                <div className="name">{name}</div>
                <div className="handle">@{handle}</div>
            </div>

            <FontAwesomeIcon className='more-button' icon={faEllipsisH} />
        </div>
    )
}

export default ProfileBadge;