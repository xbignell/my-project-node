'use strict';

const mongoose = require('../../app'),
    contact = require('../../database/schemas/contact').contact;

const models = {
    contact : mongoose.model('contact', contact)
};

module.exports = models;
