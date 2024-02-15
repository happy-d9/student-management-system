const mongoose=require('mongoose');

const student=new mongoose.Schema({
    firstname:{type:String},
    middlename:{type:String},
    lastname:{type:String},
    faculty_name:{type:String},
    gender:{type:String},
    contect:{type:Number},
    address:{type:String},
    course_name:{type:mongoose.Schema.Types.ObjectId,ref:"course"},
    pc_no:{type:Number},
    startingdate:{type:Date,default:Date.now},
    enddate:{type:Date},
    fee_stu:[]
})
module.exports=mongoose.model('students',student);