var mongoose= require('mongoose');
var user = mongoose.model('user' , {
    name : {
        type: String,
        minlength :2,
        required : true ,
        trim :true
    },
    email :{
        type :String,
        minlength:4,
        required : true,
        trim :true
    }



});

module.exports = {
    user

}
