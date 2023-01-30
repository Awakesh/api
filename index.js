const config = require("config");
const express = require("express");
const app = express();
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv').config({path: path.resolve(__dirname+'/.env')});
const port = process.env.PORT || 3002; 
var helmet = require('helmet');

app.use(express.json());
app.use(helmet.hidePoweredBy())
app.use(helmet.xssFilter());
app.use(helmet.frameguard({ action: "sameorigin" }));
app.use(cors());

app.use(express.urlencoded({ extended: false, parameterLimit: 100000 }));

const appRouter = require("./route");

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get("env")}`);
console.log(config.get("appName"));

app.get("/api", (req, res) => {
    res.send("Hello World!");
});
app.use("/api", appRouter);

var server = app.listen(port, () => {
    console.log("Example app listening on port " + port + "!");
    console.log(new Date(Date.now()));
});

module.exports = server