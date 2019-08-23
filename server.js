const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/route.js');

const logger = (req,res,next) => {
    console.log(req.method, req.url);
    next();
}
const app = express();
app.use(bodyParser.json());
app.use(logger);
app.use('/', router);


app.listen('5000', () => {
    console.log('server listening at 5000');
});
