const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('../../models/index');


const user = db.sequelize.models.User;

router.use(bodyParser.json());

router.use(cors());

router.post('/', (req, res) => {
    generatePasswordDigest(req.body.password)
        .then(passwordDigest => {
            let newBody = Object.assign(req.body, { password_digest: passwordDigest });
            delete newBody.password;
            return user.create(newBody);
        })
        .then(createdUser => {
            console.log(`Created user with email ${createdUser.email}`);
            res.json(createdUser);
        })
        .catch(err => {
            console.log('Error creating user: ', err);
            res.status(400).json({ error: 'Unable to create user' });
        });
});

router.get('/', (req, res) => {
    user.findAll()
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
    user.findByPk(req.params.userId)
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
        
    } else {

    
    user.update(req.body, {
        where: {
            id: req.params.userId
        }
    })
        .then(u => {
            return user.findByPk(req.params.userId)
        })
        .then(currentUser => {
            console.log('Updated user with handle', currentUser.handle);
            res.json(currentUser);
        })
        .catch(err => {
            console.log('Error updating user: ', err);
            res.status(400).json({ error: 'Unable to get user' });
        })
    };
});


function generatePasswordDigest(password) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}

module.exports = router;