import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import backImage from "./assets/istockphoto-500507478-170667a.webp";


function AdminCourses() {
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        function callback2(data) {
            setCourses(data.courses);
        }
        function callback1(res) {
            res.json().then(callback2)
        }
        fetch("http://localhost:3000/admin/admincourses", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1)
    }, []);

    return <div style={{display: "flex",
                        flexWrap: "wrap", 
                        justifyContent: "center",
                        backgroundImage:`url(${backImage})`,
                        backgroundSize:'cover'
                    }}>
        {courses.map(course => {
            return <Course course={course} />}
        )}
    </div>
}

export function Course({course}) {
    const navigate = useNavigate();

    return <Card style={{
        margin: 10,
        width: 350,
        minHeight: 200,
        padding: 20,
        justifyContent:"center",
        backgroundColor: '#d7d7d7'
    }}>
        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <img src={course.imageLink} style={{width: 300}} ></img>
        <Typography style={{ fontWeight: 'bold', color: '#333' ,marginTop:"10px",marginLeft:'-25px'}} textAlign={"center"} variant="h5">${course.price}</Typography>
        <div style={{display: "flex", justifyContent: "center", marginTop: 10}}>
            <Button  style={{backgroundColor: 'black', color: 'white', borderRadius: '20px'}} 
             variant="contained"
             size="large" 
             onClick={() => {
                navigate("/admin/admincourse/" + course._id);
            }}>Edit</Button>
        </div>
    </Card>

}



export default AdminCourses;