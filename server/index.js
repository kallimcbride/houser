const express = require("express");
const massive = require('massive');
require('dotenv').config();

let { CONNECTION_STRING, SERVER_PORT } = process.env;

const homeCtrl = require('./controllers/controller')

let app = express();
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('WE LIT');
})

app.post('/api/houses', homeCtrl.add)
// app.put('/api/houses/:id', homeCtrl.updateHome)
app.get('/api/houses/:id', homeCtrl.getHome)
app.get('/api/houses', homeCtrl.getHomes)
app.delete('/api/houses/:id', homeCtrl.deleteHome)

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`);
})