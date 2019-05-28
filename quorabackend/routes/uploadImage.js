var express = require('express')
var router=express.Router();
var kafka = require('../kafka/client')
var passport = require('passport')
var requireAuth = passport.authenticate('jwt',{session : false})
var Model = require('../../config/MongoConnection')
const multer = require('multer');
const upload = multer({ storage: storage });
const fs = require('fs');


const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './uploads/answers')
    }
});


router.route('/img_data').post(upload.single('file'),function(req,res){
    var new_img = new Img;
    new_img.img.data = fs.readFileSync(req.file.path)
    new_img.img.contentType = 'image/jpeg';
    new_img.save();
    res.json({ message: 'New image added to the db!' });

})


module.exports = router