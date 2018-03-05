const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/Users');
require('./services/passport');

const keys = require('./config/keys');

// const options = {
//     reconnectTries: Number.MAX_VALUE,
//     reconnectInterval: 600,
//     autoReconnect: true
// };

mongoose
    .connect(keys.mongoURI)
    .then(() => {
        console.log('Connected to mongo instance');
    })
    .catch(e => console.log('Error while connecting to Mongo: ', e));

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey, keys.cookieBackupKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
