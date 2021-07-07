import React from 'react';

import ComposeTweet from './ComposeTweet';
import TweetCard from './TweetCard';

function Feed() {
    return (
        <div>
            Home
            <ComposeTweet />
            <TweetCard />
        </div>
    )
}

export default Feed;