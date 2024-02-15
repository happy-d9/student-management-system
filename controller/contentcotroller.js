var contentdb=require('../model/contentmodel');

exports.content=async (req,res)=>
{
    var data=await contentdb.create(req.body);
    res.status(200).json({
        status:"Add Course",
        data
    })
}
exports.content_views=async (req,res)=>
{
    var data=await contentdb.find();
    res.status(200).json({
        status:"View Courses",
        data
    })
}
exports.content_view=async (req,res)=>
{
    var id=req.params.id;
    var data=await contentdb.findById(id);
    res.status(200).json({
        status:"View Course",
        data
    })
}
exports.content_update=async (req,res)=>
{
    var id=req.params.id;
    var data=await contentdb.findByIdAndUpdate(id,req.body);
    res.status(200).json({
        status:"Update Course",
        data
    })
}
exports.content_delete=async (req,res)=>
{
    var id=req.params.id;
    var data=await contentdb.findByIdAndDelete(id,req.body);
    res.status(200).json({
        status:"Delete Course",
        data
    })
}