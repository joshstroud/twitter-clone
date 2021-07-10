import React from 'react';

import LeftSidebar from './LeftSidebar/LeftSidebar'
import Feed from './Feed/Feed';
import RightSidebar from './RightSidebar';

function Home(props) {
    return (
        <div className="main-container">
            <div className='horizontal-margin'></div>
            <LeftSidebar />
            <Feed />
            <RightSidebar />
            <div className='horizontal-margin'></div>

        </div>
    )
}

export default Home;