import { Typography ,TextField, Button, Card} from "@mui/material"
import {useState} from "react";
import axios from "axios";
import backImage from "./assets/istockphoto-500507478-170667a.webp";
import { useNavigate } from "react-router-dom";

function AdminAddCourse () {
  const navigate = useNavigate();
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [image,setImage]=useState("");
  const [price,setPrice]=useState(0);

  return <div style={{
    width:'100vw',
    height:'100vh',
    justifyContent:"center",
    display:"flex",
    backgroundImage:`url(${backImage})`,
    backgroundSize:'cover'
}}>
            <Card style={{marginTop:"80px",height:400,width:400, padding:20,justifyContent:"center",backgroundColor: '#d7d7d7'}}>
            <Typography variant="h6">Add Course</Typography>
            <br/>
            <TextField 
               onChange={(e)=>{
                 setTitle(e.target.value)
               }}
                fullWidth={true} 
                id="outlined-basic" 
                label="Title" 
                variant="outlined"
               
             />
            <br/><br/>
            <TextField 
              onChange={(e)=>{
                 setDescription(e.target.value)
              }}
              fullWidth={true}
              id="outlined-basic" 
              label="Description" 
              variant="outlined" 
              
            />
            <br/><br/>
            <TextField 
            onChange={(e)=>{
              setImage(e.target.value);
            }}
              fullWidth={true} 
              id="outlined-basic" 
              label="Image-Link" 
              variant="outlined" 
              
            />
            <br/><br/>
            <TextField
             onChange={(e)=>{
              setPrice(e.target.value)
             }}
              fullWidth={true} 
              id="outlined-basic" 
              label="Price" 
              variant="outlined" 
              
             />
            <br/><br/>
            <Button
               size="large"
               variant="contained"
               style={{backgroundColor: 'black', color: 'white', borderRadius: '20px'}}
               onClick={async()=>{
                await axios.post("http://localhost:3000/admin/admincourse",{
                  title:title,
                  description:description,
                  imageLink:image,
                  published:true,
                  price
               },{
                headers:{
                  "Authorization": "Bearer "+localStorage.getItem("token")
                }
                });
                alert("Added Course!");
                navigate('/admin/admincourses')
               }}
               
               >Add Course</Button>
            </Card>
        </div>

}

export default AdminAddCourse;