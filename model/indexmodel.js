var mongoose=require('mongoose');

const login=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    role:{type:String}
})
module.exports=mongoose.model('register',login);