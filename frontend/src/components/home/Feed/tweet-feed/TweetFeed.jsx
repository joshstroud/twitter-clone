import React from 'react';

// use hooks!
import TweetCard from './TweetCard';

function TweetFeed() {
    return (
        <section>
            <TweetCard />
            <TweetCard />
        </section>
    )
}

export default TweetFeed;