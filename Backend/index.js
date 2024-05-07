const express =require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const adminRouter=require("./routes/admin");
const userRouter=require("./routes/user");

const app=express();

app.use(cors());
app.use(express.json());

app.use('/',adminRouter)
app.use('/',userRouter)
app.get('/',(req,res)=>res.json({msg:"hello"}))

mongoose.connect('mongodb+srv://ram:9teFy6zk19bZJzyN@cluster0.u2n9h7y.mongodb.net/courses',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

app.listen(3000,()=>console.log('Server running  on the port 3000'));

















// const express = require('express');
// const jwt=require('jsonwebtoken');
// const mongoose =require('mongoose');
// const app=express();
// const bodyParser = require('body-parser');
// const cors=require('cors')


// app.use(cors());
// app.use(express.json());
// const port=3000;

// const SECRET="SECr3t";

// const UserSchema=new mongoose.Schema({
//     username:{type: String},
//     password:String,
//     purchasedCourses:[{type:mongoose.Schema.Types.ObjectId,ref:'Course'}]
// });
// const AdminSchema=new mongoose.Schema({
//     username:{type:String,unique:true},
//     password:String
// })
// const courseSchema=new mongoose.Schema({
//     title:String,
//     description:String,
//     price:Number,
//     imageLink:String,
//     published:Boolean
// })
// const User=mongoose.model('User',UserSchema);
// const Admin=mongoose.model('Admin',AdminSchema);
// const Course=mongoose.model('Course',courseSchema);

// const authenticateJwt=(req,res,next)=>{
//     const authHeader=req.headers.authorization;
//     if(authHeader){
//         const token =authHeader.split(' ')[1];
//         jwt.verify(token,SECRET,(err,user)=>{
//             if(err){
//                 return res.sendStatus(403);
//             }
//             req.user=user;
//             next();
//         });
//     }else{
//         res.sendStatus(401);
//     }
// };

// mongoose.connect('mongodb+srv://ram:9teFy6zk19bZJzyN@cluster0.u2n9h7y.mongodb.net/courses',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// })


// app.use(bodyParser.json())

// app.get("/admin/adminme",authenticateJwt,async(req,res)=>{
//     const admin=await Admin.findOne({username:req.user.username});
//     if(!admin){
//         res.status(403).json({msg:"Admin doesnot exist"});
//         return;
//     }
//     res.json({
//         username:admin.username
//     })
// });
// app.post('/admin/adminsignup',async(req,res)=>{
//     const {username,password}=req.body;
//     const admin=await Admin.findOne({username});
//     if(admin){
//         res.status(403).json({message:'User already exists'});
//     }else{
//         const newUser=new Admin({username,password});
//         await newUser.save();
//         res.json({message:'User created successfully'});
//     }
// });

// app.post('/admin/adminlogin',async(req,res)=>{
//     const {username,password}=req.body;
//     const admin=await Admin.findOne({username,password});
//         if(admin){
//             const token=jwt.sign({username,role:'admin'},SECRET,{expiresIn:'1h'});
//             res.json({message:'Logged in Successfully',token});
//         }else{
//            res.status(403).json({message:"Invalid username or password"});
//         }
// });
// app.post('/admin/admincourse',authenticateJwt,async(req,res)=>{
//     const course=new Course(req.body);
//     await course.save();
//     res.json({message:'Course created Successfully',courseId:course.id});
// })

// app.put('/admin/admincourses/:courseId',authenticateJwt,async(req,res)=>{
//     const courseId = req.params.courseId;
//     const findcourse=await Course.findById(courseId);
//     if(findcourse){
//     const course=await Course.findByIdAndUpdate(req.params.courseId,req.body,{new: true});
//     if(course){
//         res.json({message:"Course updated successfully"});
//     }
//     }else{
//         res.status(404).json({message:"Course not found"});
//     }
// });

// app.get('/admin/admincourses',authenticateJwt,async(req,res)=>{
//     const courses=await Course.find({});
//     res.json({courses});
// });

// app.get('/admin/admincourse/:courseId',authenticateJwt,async(req,res)=>{
//     const courseId = req.params.courseId;
//     const course=await Course.findById(courseId);
//     res.json({course});
// })


// //User Routes
// app.get("/user/userme",authenticateJwt,async(req,res)=>{
//     const user=await User.findOne({username:req.user.username});
//     if(!user){
//         res.status(403).json({msg:"User doesnot exist"});
//         return;
//     }
//     res.json({
//         username:user.username
//     })
// });


// app.post('/user/usersignup',async(req,res)=>{
//     const {username,password}=req.body;
//     const user=await User.findOne({username});
//     if(user){
//         res.status(403).json({message:"User already Exists"});
//     }
//     else{
//         const newUser=new User({username,password});
//         await newUser.save();
//         res.json({message:'User created successfully'});
//     }
// });


// app.post('/user/userlogin',async(req,res)=>{
//     const {username , password}=req.body;
//     const user=await User.findOne({username,password});
//     if(user){
//         const token=jwt.sign({username,role:'user'},SECRET,{expiresIn:'1h'});
//         res.json({message:'Logged in SuccessFully',token});
//     }
//     else{
//         res.status(403).json({message:"Invalid username or password"});
//     }
// });

// app.get('/user/courses',authenticateJwt,async(req,res)=>{
//     const courses= await Course.find({published:true});
//     res.json({courses});
// });

// app.post('/user/courses/:courseId',authenticateJwt,async(req,res)=>{
//     const course=await Course.findById(req.params.courseId);
//     if(course){
//        const user=await User.findOne({username:req.user.username});
//        if(user){
//         user.purchasedCourses.push(course);
//         await user.save();
//         res.json({message:'Course purchased successfully'});
//        }else{
//         res.status(403).json({message:'User not found'});
//        }
//     }else{
//         res.status(404).json({message:'Course not found'});
//     }
// });

// app.get('/user/purchasedCourses',authenticateJwt,async(req,res)=>{
//     const user=await User.findOne({username:req.user.username}).populate('purchasedCourses');
//     if(user){
//         res.json({purchasedCourses:user.purchasedCourses || [] });
//     }else{
//         res.status(403).json({message:'User not found'});
//     }
// });
// app.get('/user/usercourse/:courseId',authenticateJwt,async(req,res)=>{
//     const courseId=req.params.courseId;
//     const course=await Course.findById(courseId);
//     res.json({course});
// });


// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// })