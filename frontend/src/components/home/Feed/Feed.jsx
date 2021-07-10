import React from 'react';

import ComposeTweet from './ComposeTweet';
import TweetFeed from './tweet-feed/TweetFeed';

function Feed() {
    return (
        <div className="feed-container">
            <div className="header">
                <h1>Home</h1>
            </div>
            <ComposeTweet />
            
            <TweetFeed />
        </div>
    )
}

export default Feed;