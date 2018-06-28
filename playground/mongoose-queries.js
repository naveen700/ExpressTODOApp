"use strict";

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/model/todo');
const {ObjectID} = require('mongodb');
const {user} = require('../server/model/user');


var id = '6b347a50b262edb217fac325555';


if(!ObjectID.isValid(id)){
   //return console.log('id is no valid please enter the vlid id ; program terminator')
}



Todo.find(
    {
        _id: id   // this is converted by mongoose internally to id as object


    }
).then((todos) => {


    console.log('Todos', todos);
}).catch((err) => {
    console.log(err);



}).catch((err) => {
    console.log(err);
})




Todo.findOne({ //find the first matching one from database

    _id: id
}).then((todo) => {
    if (!todo)
        return console.log("Does not found the object");


    console.log('Todo', todo);

}).catch((err) => {
    console.log(err);
})





Todo.findById(id).then((todo) => {
    console.log('findbyid', todo);
}).catch((err) => {
    console.log(err);
})// assignment to me

var userId = '5b3373b3932e5d6d298ebf25000';

user.findById(userId).then((doc) => {
    console.log("user found at",doc);

} ).catch((err) => {
    console.log("no user found at",userId);
})

