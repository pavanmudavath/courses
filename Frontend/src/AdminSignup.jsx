import { Card, Typography ,TextField,Button} from "@mui/material"
import {useState} from "react";
import axios from "axios";
import backImage from "./assets/istockphoto-500507478-170667a.webp";

const AdminSignup = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  return <div style={{
    width:'100vw',
    height:'100vh',
    justifyContent:"center",
    display:"flex",
    backgroundImage:`url(${backImage})`,
    backgroundSize:'cover'
}}>
   
        <div style={{justifyContent:"center"}}> 
           <Card variant="outline" style={{marginTop:"100px",width:400 , padding:40,justifyContent:"center",backgroundColor: '#d7d7d7'}}>
           <Typography  variant="h6">WelCome to Coursera . SiginUp Below</Typography>
           <br/>
             <TextField 
             id="emaiField"
                onChange={(e)=>{
                  let eve=e.target;
                  setEmail(eve.value);
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
               id="passwordField"
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
                  const response=await axios.post("http://localhost:3000/admin/adminsignup",{
                    username:email,
                    password:password
                  })
                  let data=response.data;
                  localStorage.setItem("token",data.token);
                  window.location="/admin/adminsignin"
                }}
              >Signup</Button>
              <Typography style={{marginTop:'15px'}}>Already a member? <a href="/admin/adminsignin" style={{color: 'blue', textDecoration: 'underline'}}>SignIn</a></Typography>
           </Card>
        </div>
    </div>
}

export default AdminSignup


