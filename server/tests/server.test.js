const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../model/todo');



// before each is gonna run before the every testcases  
beforeEach((done) => {
    //todo.remove works same like db.collection.remove
    Todo.remove({}).then(() => {
        done();
    })

});



describe('POST /index', () => {

    it('should create  a new todo', (done) => {

        var text = 'Test todo text';


        request(app)
            .post('/todos')
            .send({ text }) // upto this end we have send the request now making assertions about respnse
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => { //checking herer what is got stored in tot the mongo
                if (err) {
                    return done(err);
                }
                // here we are checking our todo is added to the database or not
                Todo.find().then((todos) => { //todo.find is the method which is working just like db.collection.find
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();

                }).catch((e) => done(e))

            })

    })



    it('should not create the  todo for bad data', (done) => {

        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err)
                    console.log(err);

                Todo.find().then((todos) => {
                    expect((todos.length)).toBe(0);
                    done();


                }).catch( (e) => done(e))  


            })





    })



}) 