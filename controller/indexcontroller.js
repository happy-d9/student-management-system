var login = require('../model/indexmodel');

const storage = require('node-persist');

exports.register = async (req, res) => {
    var data=await login.create(req.body);
    res.status(200).json({
        status:"Register successfully",
        data
    })
}
exports.login = async (req, res) => {

        var data = await login.find({email:req.body.email});
        // console.log(req.body.email);

            if (data.length == 1) {
                if (data[0].password == req.body.password) {
                    res.status(200).json(
                    {
                        status: "Login successfully"
                    })
                }
                else {
                    res.status(200).json(
                    {
                        status: "check password"
                    })
                }
            }
            else {
                res.status(200).json(
                    {
                        status: "check email and password"
                    })
            }
}
exports.logout = async (req, res) => {
    await storage.init( /* options ... */);
    var id = await storage.clear();

    res.status(200).json(
        {
            status: "Logout"
        })
}
exports.update=async(req,res)=>
{
    var id=req.params.id;
    var data=await login.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status:"success",
        data
    })
}
exports.delete_role=async(req,res)=>
{
    var id=req.params.id;
    await login.findByIdAndDelete(id);
    var data=await login.findById(id);
    res.status(200).json({
        status:"success",
        data
    })
}
exports.view=async(req,res)=>
{
    var data=await course.find();
    res.status(200).json({
        status:"success",
        data
    })
}