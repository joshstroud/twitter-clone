const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('../../models/index');

const Tweet = db.sequelize.models.Tweet;
const User = db.sequelize.models.User;

const { generatePasswordDigest } = require('../../utils')

router.use(bodyParser.json());

router.use(cors());

router.get('/', (req, res) => {
    if(req.query.userId) {
        Tweet.findAll({
            where: {
                userId: req.query.userId
            }
        })
        .then(allTweets => {
            User.findByPk(req.query.userId)
            .then(user => console.log('Getting all tweets for user', user.handle));
            res.json(allTweets);
        }).catch(err => {
            console.log('Error getting tweets for userId', req.query.userId, err);
            res.status(400).json({ error: err });
        })
    } else {
        Tweet.findAll()
        .then(allTweets => {
            console.log('Getting all tweets');
            res.json(allTweets);
        })
        .catch(err => {
            console.log('Error getting all tweets', err);
            res.status(400).json({ error: err });
        })
    }
});

router.get('/:tweetId', (req, res) => {
    Tweet.findByPk(req.params.tweetId)
    .then(tweet => {
        console.log(`Getting tweet id ${tweet.id}`);
        res.json(tweet);
    })
    .catch(err => {
        console.log(`No tweet with id ${req.params.tweetId} found`);
        res.status(400).json({ error: err});
    })
});

router.post('/', (req, res) => {
    Tweet.create(req.body)
    .then(tweet => {
        tweet.getUser()
        .then(user => console.log(`Tweet id ${tweet.id} created for user ${user.handle}`));
        res.json(tweet);
    })
})

router.put('/:tweetId', (req, res) => {
    Tweet.update(req.body, {
        where: {
            id: req.params.tweetId
        }
    })
    .then(tweet => {
        return Tweet.findByPk(req.params.tweetId);
    })
    .then(tweet => {
        console.log(`Updated tweet id`, tweet.id);
        res.json(tweet);
    })
    .catch(err => {
        console.log(`Error updating tweet id ${req.params.tweetId}`);
        res.status(400).json({ error: err });
    })
});

router.delete('/:tweetId', (req, res) => {
    Tweet.destroy({
        where: {
            id: req.params.tweetId
        }
    })
    .then( t => {
        console.log(`Deleted tweet id ${req.params.tweetId}`);
        res.status(204).json({});
    })
    .catch(err => {
        console.log(`Error deleting tweet id ${req.params.tweetId}`);
        res.status(400).json({ error: err });
    })
});

module.exports = router;