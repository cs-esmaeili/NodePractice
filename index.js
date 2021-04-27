const express = require("express");
const path = require("path");
const rootdir = require("./utils/path");

const app = express();
const apiroutes = require('./routes/api');

app.use(express.urlencoded({extended: true}) );


app.use("/api" , apiroutes);

app.get("/", function (req, res) {
    res.sendFile(path.join(rootdir , "views" , "home.html"))
});

app.use(express.static(path.join(rootdir , "public")));

app.use((req, res) => {
    res.sendFile(path.join(rootdir , "views" , "404.html"))
});

app.listen(3000);
