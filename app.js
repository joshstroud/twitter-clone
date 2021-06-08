require('dotenv').config()

const express = require('express');

const db = require('./models/index');

db.sequelize.authenticate()
    .then(r => console.log('Connected to SQL database'))
    .catch(err => console.log('Unable to connect to database. Error: ', err));

// use #sync to update table, maybe use a migration for column integrations to save table data
// db.sequelize.sync();

const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const expressSession = require('express-session')({
    // cookies expire after three days, since we are using a leaky memory store
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 3 },
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
});
// const passport = require('passport');

const session = require('./routes/api/session');
const users = require('./routes/api/users');

// const UserModel = require('./models/User');

const app = express();

// app.use(passport.initialize());
// app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession);

// cors breaks the api call to hugging face, for some reason
// app.use(cors());

// passport.use(UserModel.createStrategy());

// passport.serializeUser(UserModel.serializeUser());
// passport.deserializeUser(UserModel.deserializeUser());

app.use('/api/session', session);
app.use('/api/users', users);

const frontendBuildPath = path.join(__dirname, 'frontend', 'build');
const frontendPublicPath = path.join(__dirname, 'frontend', 'public');

app.use(express.static(frontendBuildPath));
app.use(express.static(frontendPublicPath));

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// Get React frontend
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
// });

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
 
