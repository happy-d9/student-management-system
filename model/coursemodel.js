const mongoose=require('mongoose');

const course=new mongoose.Schema(
    {
        course_name:{type:String},
    }
)
module.exports=mongoose.model('course',course);