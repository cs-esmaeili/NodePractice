const express = require("express");

const app = express();
const apiroutes = require('./routes/api');

app.use(express.urlencoded({extended: true}) );

app.use((req, rest , next) => {
    console.log("first");
    next();
});

app.use("/api" , apiroutes);

app.get("/", function (req, res) {
    res.sendFile('views/test.html', {root: __dirname })
});

app.listen(3000);
