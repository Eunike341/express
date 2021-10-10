//const functions = require('firebase-functions');
const express = require('express');
const app = express();
const path = require('path');

app.set("/", "html");
app.use(express.static(path.join(path.resolve(), "/")));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(8080, () => {
    console.log("listening");
})

//exports.app = functions.http.onRequest(app);