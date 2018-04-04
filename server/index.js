const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./models/Users');
require('./models/Surveys');
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

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey, keys.cookieBackupKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

//only in production
if (process.env.NODE_ENV === 'production') {
    //order of operation is important here.

    //express will serve up production asset (main.js / main.css)
    app.use(express.static('client/build'));

    //express will serve up the index.html if it doesn't recognise the route.
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
