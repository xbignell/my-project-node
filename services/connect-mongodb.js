exports = module.exports = (mongoose) => {
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useUnifiedTopology', true);

    mongoose.connect("mongodb://localhost:27017/xbignell", (err, res) => {
        if (err) {
            console.log("ERROR " + err);
        }
    });
};
