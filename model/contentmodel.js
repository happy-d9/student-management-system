var mongoose=require('mongoose');

const contentdb=new mongoose.Schema({
    course_name:{type:String},
    content_name:[ ],
    duration:{type:Number},
    fee:{type:Number}
})
module.exports=mongoose.model('content',contentdb);