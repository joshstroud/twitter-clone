import React from 'react';

import LeftSidebar from './LeftSidebar/LeftSidebar'
import Feed from './Feed/Feed';
import RightSidebar from './RightSidebar';

function Home(props) {
    return (
        <div className="main-container">
            <LeftSidebar />
            <Feed />
            <RightSidebar />
        </div>
    )
}

export default Home;