const express = require("express");
const cors = require('cors');
require('dotenv').config();

const mainRoute = require("../src/app");
const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

app.use(cors());
app.use("/", express.urlencoded({
    extended: true
}))
app.use("/", mainRoute)

app.listen(port, () => {
    console.log(`server running on port ${host}:${port}`)
})