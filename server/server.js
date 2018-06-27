var { mongoose } = require('./db/mongoose.js');
var { Todo } = require('./model/todo');
var { user } = require('./model/user');



var express = require('express');
var bodyParser = require('body-parser');



// server.jjs will be only used for the route handling

var app = express();

app.use(bodyParser.json()); // this returns the functionwhich is the middlewaare we will give to the express
app.post('/todos', (req, res) => {
    console.log(req.body);// this req.body is coverted by body parser


    var todo = new Todo({
        text: req.body.text

    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);

    })





});

app.post('/user', (req, res) => {
    var newUser = new user({
        name: req.body.name,
        email: req.body.email,

    });
    newUser.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(send(err));
    })



});




app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos



        });
    }, (err) => {
        res.status(400).send(err);
    })


})




app.listen(3000, () => {

    // console.log('port started on 3000');



});
module.exports = { app };