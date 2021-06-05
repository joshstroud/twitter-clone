const express = require('express');
const router = express.router();
const passport = require('passport');

const bodyParser = require('body-parser');

const userModel = require('../../models/User');
const connectEnsureLogin = require('connect-ensure-login');

router.use(bodyParser.json());

