import { Card, Typography ,Button,TextField} from "@mui/material"
import {useState} from "react";
import axios from "axios";
import backImage from "./assets/istockphoto-500507478-170667a.webp";

function UserSignin (){
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  return <div style={{ width:'100vw',
        height:'100vh',
        justifyContent:"center",
        display:"flex",
        backgroundImage:`url(${backImage})`,
        backgroundSize:'cover'}}>
    <Card style={{marginTop:"100px",width:400 ,marginBottom:'280px', padding:40,justifyContent:"center",backgroundColor: '#d7d7d7'}}>
        <Typography variant="h6">WelCome Back . SignIn Below</Typography>
        <br/>
        <TextField 
         onChange={(evant11)=>{
          let elemt=evant11.target;
          setEmail(elemt.value);
        }}
            fullWidth={true} 
            label="Email" 
            variant="outlined"
        />
        <br/><br/>
        <TextField 
      onChange={(e)=>{
          setPassword(e.target.value);
        }}
            fullWidth={true} 
            type="password" 
            label="Password" 
            variant="outlined"
         />
        <br/><br/>
        <Button 
          size="large"
          variant="contained"
          style={{backgroundColor: 'black', color: 'white', borderRadius: '20px'}}
          onClick={async()=>{
            const res=await axios.post("http://localhost:3000/user/userlogin",{
              username:email,
              password:password
          },{
             headers:{
               "Content-Type":"application/json"
             }
            });
            const data=res.data;
            localStorage.setItem("token",data.token);
            window.location="/user/listcourses"
          }}

         >Signin</Button>
         <Typography style={{marginTop:'15px'}}>New member ? <a href="/user/usersignup" style={{color: 'blue', textDecoration: 'underline'}}>SignUp</a></Typography>
    </Card>
    </div>
}

export default UserSignin;