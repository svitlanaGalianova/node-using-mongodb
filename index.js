import express from 'express';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var PORT = 8080

var app = express()
var conn = MongoClient.connect(url) // returns a Promise

app.get('/users', function (req, res) {
    conn.then(client => client.db('svitlana').collection('users').find({}).toArray(function (err, docs) {
        if (err) { console.error(err) }
        res.send(JSON.stringify(docs))
    }))
})
app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);
