var course=require('../model/coursemodel');

exports.course=async(req,res)=>
{
    var data=await course.create(req.body);
    res.status(200).json({
        status:"Add Course",
        data
    })
}
exports.course_find=async(req,res)=>
{
    var data=await course.find();
    res.status(200).json({
        status:"View Courses",
        data
    })
}
exports.course_view=async(req,res)=>
{   
    var id=req.params.id;
    var data=await course.find(id);
    res.status(200).json({
        status:"View Course",
        data
    })
}
exports.course_update=async(req,res)=>
{
    var id=req.params.id;
    var data=await course.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status:"Update Course",
        data
    })
}
exports.course_delete=async(req,res)=>
{
    var id=req.params.id;
    await course.findByIdAndDelete(id);
    var data=await course.findById(id);
    res.status(200).json({
        status:"Delete Course",
        data
    })
}