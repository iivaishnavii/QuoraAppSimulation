const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://quorauser:quorauser@.mlab.com:6ddbb/Quora');



module.exports = {
    
};
