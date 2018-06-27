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


    // to delete we have many delete methods 
    // deleteMany , deleteOne , findOneAndDelete() 
    // deleteMany is used to many delete duplicate data presnt in the collectin
    //   db.collection('Employee').deleteMany({name : 'Naveen Rana'}).then((result) => {
    //     console.log(result);  // result will have property  ok which is equal to 1 ,if its everyting gone correct and n property equals to number of data matched tp query
    //   });

    //  // DELETE ONLY DELETE THE FIRST DATA WHICH MATCHES THE CRITERIA
    //   db.collection('Employee').deleteOne({name : 'arpit'}).then((result) => {
    //     console.log(result);  // result will have property  ok which is equal to 1 ,if its everyting gone correct and n property equals to number of data matched tp query
    //   });




    // this is best one
    // findOne finds the object and delete it, and also returns the data deleted, this deletes only one document
    db.collection('Employee').findOneAndDelete({ dev: 'software developer' }).then((res) => {
        console.log(res);
    });
    client.close();
});

