const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
        console.log(err);

    console.log('connected to the Mongodb server');
    var db = client.db('TodoApp');
    // db.collection('Todos').find({ _id: new ObjectID('5b31f18c0cca2e3100c79985') }).toArray().then((docs) => {
    //     console.log('ToDos Content');
    //     console.log(JSON.stringify(docs, undefined, 4));

    // }, (err) => {
    //     console.log("error which finding the document");
    // });
    // find returns the mongodb cursor and we have toArray method of cursor it returns the array of objects
    // and toArray is promise


    // findoneandupdate update (mongodb.github.io) findOneAndUpdate(filter,update,options,callback)
    // mongo has its own update operators like $set ,$ inc 
//    db.collection('Employee').findOneAndUpdate({name: 'manmeet'}, {$set : {  dev : 'cloud engineer'} }, {returnOriginal : false}).then((res)=> {
//         console.log(res);
//    });
   



   db.collection('Employee').findOneAndUpdate({name : 'manmeet'}, {$set : {dev : 'software developer'}, $inc :  {age : 1}}, {returnOriginal :true}).then((res)=> {
       console.log(res);
   } );
   



    client.close();






});

