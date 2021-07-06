const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('../../models/index');

const Follow = db.sequelize.models.Follow;
const Tweet = db.sequelize.models.Tweet;
const User = db.sequelize.models.User;

const { generatePasswordDigest } = require('../../utils');
const follow = require('../../models/tweet');

router.use(bodyParser.json());

router.use(cors());

router.post('/', (req, res) => {
    let theFollow;
    let theUser;

    Follow.create(req.body)
    .then(follow => {
        theFollow = follow;
        return theFollow.getUser();
    }).then(user => {
        theUser = user;

        return theFollow.getFollower();
    }).then(follower => {
        console.log(`Created follow, user ${follower.handle} following ${theUser.handle}`);
        res.json(theFollow);
    }).catch(err => {
        console.log('Error creating follow');
        console.log(err);
        res.status(400).json({ error: 'Error creating follow' });
    })
})

router.delete('/:followId', (req, res) => {
    Follow.destroy({
        where: {
            id: req.params.followId
        }
    })
        .then(t => {
            console.log(`Deleted follow id ${req.params.followId}`);
            res.status(204).json({});
        })
        .catch(err => {
            console.log(`Error deleting follow id ${req.params.followId}`);
            res.status(400).json({ error: err });
        })
});
module.exports = router;