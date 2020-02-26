var mongoose = require('mongoose');
var contactEntrypoint = mongoose.model('Contact');

exports.findAllcontacts = function(req, res) {
    contactEntrypoint.find(function(err, tvshows) {
        if(err) res.send(500, err.message);
        res.status(200).jsonp(tvshows);
    });
};

exports.addContact = function(req, res) {
    var contactTest = new contactEntrypoint({
        textConcept: req.body.textConcept,
        name: req.body.name,
        email: req.body.email,
        numberPhone: req.body.numberPhone,
    });
    contactTest.save(function(err, tvshow) {
        if(err) return res.status(500).send( err.message);
        res.status(200).jsonp(tvshow);
    });
};
