var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    name : String,
    age : Number
});

mongoose.model('student', studentSchema);
mongoose.connect('mongodb://localhost/student');