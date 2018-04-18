var mongoose = require('mongoose');
var studentModel = mongoose.model('student');
module.exports = {
    createStudent : function(req, res, next) {
        var body = req.body;
        studentModel.create(body, function(err, result) {
            console.log('--------------', err, result);
            if(err) {
                res.status(500);
                res.send(err);
                return;
            }
            res.status(200);
            res.send(result);
        });
    }
};