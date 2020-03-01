var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

require('./models/contact')(app, mongoose);
var Contact = require('./controllers/contact-entrypoint');

var router = express.Router();

require('./services/connect-mongodb')(mongoose);
require('./routes')(Contact, router);

app.use('/api', router);
app.listen(8000, function() {
    console.log("Node server running on localhost:8000");
});
