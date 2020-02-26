exports = module.exports = (app, mongoose) => {

    var contact = new mongoose.Schema({
        textContent: { type: String },
        name: { type: String },
        email: { type: String },
        numberPhone: { type: Number }
    }, {
        timestamps: {createdAt: 'created_at'}
    });

    mongoose.model('Contact', contact);
};

