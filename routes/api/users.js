const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('../../models/index');

const User = db.sequelize.models.User;

const { generatePasswordDigest } = require('../../utils')

router.use(bodyParser.json());

router.use(cors());

router.post('/', (req, res) => {
    generatePasswordDigest(req.body.password)
        .then(passwordDigest => {
            let newBody = Object.assign(req.body, { password_digest: passwordDigest });
            delete newBody.password;
            return User.create(newBody);
        })
        .then(createdUser => {
            console.log(`Created user with email ${createdUser.email}`);
            res.json(createdUser);
        })
        .catch(err => {
            console.log('Error creating user: ', err);
            const errorMessages = err.errors.map(errorObj => errorObj.message);
            res.status(400).json({ error: errorMessages });
        });
});

router.get('/', (req, res) => {

    User.findAll()
        .then(allUsers => {
            console.log('Getting all users');
            res.json(allUsers);
        })
        .catch(err => {
            console.log('Error getting all users: ', err);
            res.status(400).json({ error: 'Unable to get all users ' });
        });
});

router.get('/:userId', (req, res) => {
    User.findByPk(req.params.userId)
        .then(currentUser => {
            console.log('Returned user with handle', currentUser.handle);
            res.json(currentUser);
        })
        .catch(err => {
            console.log('Error getting user: ', err);
            res.status(400).json({ error: 'Unable to get user' });
        })
});

router.put('/:userId', (req, res) => {
    if (req.body.password) {
        console.log('Updating user without password');
        delete req.body.password;
    }   

    User.update(req.body, {
        where: {
            id: req.params.userId
        }
    })
        .then(u => {
            return User.findByPk(req.params.userId)
        })
        .then(currentUser => {
            console.log('Updated user with handle', currentUser.handle);
            res.json(currentUser);
        })
        .catch(err => {
            console.log('Error updating user: ', err);
            res.status(400).json({ error: 'Unable to update user' });
        })
});

router.get('/:userId/followed', (req, res) => {
    let theUser;

    User.findByPk(req.params.userId)
    .then(user => {
        theUser = user;
        return theUser.getFollowerFollows();
    }).then(follows => {

        const getFollowerPromises = follows.map(follow => {
            const followerUserId = follow.follower_id;
            return User.findByPk(followerUserId);
        });
        return Promise.all(getFollowerPromises)
    }).then(followingUsers => {
        const followingUserHandles = followingUsers.map(user => {
            if (user) {
                return user.handle
            }
        });
        console.log(`user handle ${theUser.handle} is followed by users ${followingUserHandles.join(', ')}`);

        res.json(followingUsers);
    })
    .catch(err => {
        console.log(`Error getting following users for user id ${req.params.userId}:\n`, err);
        res.status(400).json({ error: 'Error fetching following users' });
    })
})

router.get('/:userId/following', (req, res) => {
    let theUser;

    User.findByPk(req.params.userId)
        .then(user => {
            theUser = user;
            return theUser.getFollowingFollows();
        }).then(follows => {
            const getFollowedPromises = follows.map(follow => {
                const followerUserId = follow.user_id;
                return User.findByPk(followerUserId);
            });
            return Promise.all(getFollowedPromises)
        }).then(followedUsers => {
            const followedUserHandles = followedUsers.map(user => {
                if (user) {
                    return user.handle
                }
            });
            console.log(`User handle ${theUser.handle} is following users ${followedUserHandles.join(', ')}`);

            res.json(followedUsers);
        })
        .catch(err => {
            console.log(`Error getting followed users for user id ${req.params.userId}:\n`, err);
            res.status(400).json({ error: 'Error fetching followed users' });
        })
})

module.exports = router;