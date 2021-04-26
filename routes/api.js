const express = require("express");

const router = express.Router();

router.get("/test", function (req, res) {
    res.sendFile('views/test.html', {root: __dirname })
});

module.exports = router;