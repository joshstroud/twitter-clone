const bcrypt = require('bcrypt');

const NUM_SALT_ROUNDS = 10;

module.exports.generatePasswordDigest = (password) => {
    return bcrypt.hash(password, NUM_SALT_ROUNDS);
}