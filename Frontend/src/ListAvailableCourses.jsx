import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Typography ,Button} from "@mui/material";

const AvailableCourses = () => {
  const [courses,setCourses]=useState([]);
  useEffect(()=>{
    function callback2(data){
      setCourses(data.courses)
    }
    function callback1(res){
      res.json().then(callback2)
    }
    fetch("http://localhost:3000/user/courses",{
      method:"GET",
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("token")
      }
    }).then(callback1)
  },[]);

  return<div> 
    <Typography style={{fontWeight: 'bold', color: '#333', justifyContent:'center', marginLeft:380,marginTop:15}}variant="h6">Discover greatness in every course. Elevate your skills with us today!</Typography>
   <div style={{display:'flex',flexWrap:"wrap",justifyContent:"center",marginTop:20}}>
    {courses.map(course=>{
      return <Course course={course}/>
    })}
  </div>
  </div>
}

export function Course({course}){
  const navigate=useNavigate();
  return <Card style={{
    marginTop:45,
    margin:10,
    width:300,
    minHeight:200,
    padding:40,
    justifyContent:"center",
    backgroundColor: '#d7d7d7'

    
  }}>
    <Typography style={{fontWeight: 'bold', color: '#333'}}textAlign={"center"} variant="h5">{course.title}</Typography>
    <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
    <img src={course.imageLink} style={{width:300}}></img>
    <Typography style={{marginTop:"15px",marginLeft:'110px',fontWeight: 'bold', color: '#333'}} variant="h5">${course.price}</Typography>
    <div style={{display:"flex", justifyContent:"center",margin:20}}>
      <Button
       variant="contained"
        size="large" 
        style={{backgroundColor: 'black', color: 'white', borderRadius: '20px'}} 
        onClick={()=>{
        navigate("/user/courses/"+course._id);
      }}>
        Buy
      </Button>
    </div>
  </Card>
}

export default AvailableCourses