var express = require("express"),
    app = express();

var router = express.Router();
router.get('/contact-request', function(req, res) {
    res.send("Only creating nodejs api rest from bases");
});
app.use(router);
app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});
