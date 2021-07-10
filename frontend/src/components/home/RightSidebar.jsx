import React from 'react';

// cheating with a static image, it's a lot of HTML with no backend
import rightSidebar1 from '../../assets/right-sidebar/right-sidebar-1-of-3.png'
import rightSidebar2 from '../../assets/right-sidebar/right-sidebar-2-of-3.png'
import rightSidebar3 from '../../assets/right-sidebar/right-sidebar-3-of-3.png'

function RightSidebar() {
    return (
        <div className='right-sidebar-container'>

            <img className='static-image image-1' src={rightSidebar1} />
            <img className='static-image image-2' src={rightSidebar2} />
            <img className='static-image image-3' src={rightSidebar3} />
        </div>
    )
}

export default RightSidebar;