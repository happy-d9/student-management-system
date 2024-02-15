var contentdb=require('../model/contentmodel');
var studentdb=require('../model/studentmodel');

exports.add = async(req,res)=>{
    console.log(req.body.course_name);
    var content = await contentdb.find({course_name:req.body.course_name});
    console.log(content);
    var date= new Date();
    var enddate = date.toString(date.setMonth(date.getMonth() + content[0].duration));
    var temp =[];
    var dates= new Date();
   
    for(var i=content[0].fee; i>0; i=i-req.body.installment)
    {
       if(req.body.installment<i)
       {
        var arr = [req.body.installment,"not paid",new Date(dates.setMonth(dates.getMonth()+1))];
        console.log(arr);
        temp.push(arr);
       }
       else{
            temp.push([i,"not paid"]);
       }
    }
   
    var data =await studentdb.create({ 
        firstname:req.body.firstname,
        middlename:req.body.middlename,
        lastname:req.body.lastname,
        faculty_name:req.body.faculty_name,
        contect:req.body.contect,
        address:req.body.address,
        course_name:req.body.course_name,
        pc_no:req.body.pc_no,
        enddate:enddate,
        fee_stu:temp
    });
    
    res.status(200).json({
        status:"Add Student",
        data
    })
}
exports.login = async (req, res) => {
    try {
        var data = await login.find({ "email": req.body.email });

        await storage.init( /* options ... */);
        var id = await storage.getItem('id');

        if (id == undefined) {
            if (data.length == 1) {
                if (data[0].password == req.body.password) {
                    await storage.init( /* options ... */);
                    await storage.setItem('id', data[0].id);
                    await storage.setItem('role', data[0].role);

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
        else {
            res.status(200).json(
                {
                    status: "already login"
                }
            )
        }
    } catch (error) {
        res.status(404).json({
            status: error
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
exports.view = async(req,res)=>{
    var data = await studentdb.find().populate("course_name");
    res.status(200).json({
        status:"data view",
        data
    })
}
exports.find=async (req,res)=>
{
    var id=req.params.id;
    var data=await studentdb.findById(id).populate('course_name');
    res.status(200).json({
        status:"View student detail",
        data
    })
}
exports.deletes = async(req,res)=>{
    var id = req.params.id;
    var data = await studentdb.findByIdAndDelete(id);
    res.status(200).json({
        status:"data delete",
        data
    })
}

exports.update = async(req,res)=>{
    var id = req.params.id;
    var data = await studentdb.findByIdAndUpdate(id,req.body);
    res.status(200).json({
        status:"data update",
        data
    })
}