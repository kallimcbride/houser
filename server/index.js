const express = require("express");
const massive = require('massive');
require('dotenv').config();

let { CONNECTION_STRING, SERVER_PORT } = process.env;

let app = express();
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('WE LIT');
})

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`);
})