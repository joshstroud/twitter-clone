const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const bcrypt = require('bcrypt');

const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('../../models/index');
const { Op } = require('sequelize');
const User = db.sequelize.models.User;

const { generatePasswordDigest, comparePassword } = require('../../utils')

router.use(bodyParser.json());

router.use(cors());

router.post('/', (req, res) => {
    let user;
    User.findOne({ 
        where: {
            [Op.or]: [
                { email: req.body.username },
                { handle: req.body.username }
            ]
        }
    }).then(currentUser => {
        user = currentUser;
        if (!user) {
            console.log('No user with given username found');
            res.status(400).json( { error: 'No user with given username found' });
        }

        console.log(req.body.password, user.password_digest);
        return bcrypt.compare(req.body.password, user.password_digest)
    }).then(isRightPassword => {
        if (isRightPassword) {
            req.session.authToken = crypto.randomBytes(16).toString('hex');
            req.session.userId = user.id;
            console.log(`User "${user.handle}" logged in`);
            res.json( { status: 'login success' });
        } else {
            console.log(`Incorrect password on login for username "${req.body.username}"`);
            res.status(400).json( { error: 'Incorrect password', });
        }
    });
});

router.delete('/', (req, res) => {
    if (req.session.authToken) {
        let userHandle;
        User.findByPk(req.session.userId).then(user => {
            userHandle = user.handle;

            req.session.destroy(err => {
                if (err) {
                    console.log('Error destroying user session', err);
                } else {
                    console.log(`User "${userHandle}" logged out`);
                }
                res.json({ status: 'logout success' });
            });
        });
    } else {
        console.log('Tried to log out when already logged out');
        res.status(400).json({ err: 'User already logged out' })
    }  
});

module.exports = router;