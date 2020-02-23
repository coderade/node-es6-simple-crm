require('dotenv').config();

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import {PORT, MONGOOSE_URL} from './config'

const app = express();

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(MONGOOSE_URL, {
    useMongoClient: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);
