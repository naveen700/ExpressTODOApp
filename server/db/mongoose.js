//mongoose is a orm used to srtructure the data ,putting the validation work very easy and also 
//it removes the boiler platecode process

var mongoose = require('mongoose');
// behind the scene mongoose already waits for the connection query before even the connect query called
// this makes it more powerful and fast
//mongoose supports callback by default but we wil use promise(launch by Bluebird)
mongoose.Promise = global.Promise; // these are built in promises 
mongoose.connect('mongodb://localhost:27017/ToDoApp')
console.log(mongoose);
module.exports.mongoose = mongoose;