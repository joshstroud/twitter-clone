const express = require('express');

const connectDB = require('./config/db');


const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
});
const passport = require('passport');

// const chats = require('./routes/api/chats')
// const users = require('./routes/api/users')

// const UserModel = require('./models/User');

const app = express();

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession);

connectDB();

// cors breaks the api call to hugging face, for some reason
// app.use(cors());

// passport.use(UserModel.createStrategy());

// passport.serializeUser(UserModel.serializeUser());
// passport.deserializeUser(UserModel.deserializeUser());

// app.use('/api/chats', chats)

const frontendBuildPath = path.join(__dirname, 'frontend', 'build');
const frontendPublicPath = path.join(__dirname, 'frontend', 'public');

app.use(express.static(frontendBuildPath));
app.use(express.static(frontendPublicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
 
