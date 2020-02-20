var moongose = require('mongoose'),
    Schema = mongoose.Schema;

var contact = new Schema({
    textContent: { type: String },
    name: { type: String },
    email: { type: String },
    numberPhone: { type: Number }
}, {
    timestamps : { createdAt: 'created_at'}
});

module.exports = moongose.model('Contact', contact);
