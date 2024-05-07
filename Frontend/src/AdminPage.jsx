import { Card,Button, Typography } from "@mui/material";
import backImg from "./assets/istockphoto-500507478-170667a.webp";
import addcoursesImg from "./assets/download-removebg-preview.png";
import coursesIconImage from './assets/download__1_-removebg-preview.png'

import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate =useNavigate();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw', backgroundImage: `url(${backImg})`, backgroundSize: 'cover' }}>
      <Typography  style={{marginTop:"-150px" ,fontWeight: 'bold', color: '#333'}} variant="h6"> Welcome to the CourseApp </Typography>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ marginLeft: '0px', marginTop: '20px', width: '30%', height: '300px', backgroundColor: '#d7d7d7' }}>
          <img style={{ marginLeft: '30px', marginTop: '20px', width: '75%',height:'73%' }} src={addcoursesImg} alt="adminimageIcon" />
          <Button
            style={{ marginTop: "5px", marginLeft: '100px', backgroundColor: 'black', color: 'white', borderRadius: '20px' }}
            onClick={() => {
              navigate("/admin/adminaddcourse")
          }}
          >
            Add Courses
          </Button>
        </Card>

        <Card style={{ marginLeft: '50px', marginTop: '20px', width: '30%', height: '300px', backgroundColor: '#d7d7d7' }}>
          <img style={{ marginLeft: '30px', marginTop: '20px', width: '80%' ,height:'65%'}} src={coursesIconImage} alt="adminimageIcon" />
          <Button
            style={{ marginLeft: '111px', backgroundColor: 'black', color: 'white', borderRadius: '20px',marginTop:"15px" }}
            onClick={() => {
              navigate("/admin/admincourses")
          }}
          
          >
            Courses
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default AdminPage;