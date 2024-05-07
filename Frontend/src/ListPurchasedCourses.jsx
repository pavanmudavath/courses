// ListPurchasedCourses.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Typography, Card,Button } from "@mui/material";

function ListPurchasedCourses() {
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPurchasedCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/purchasedCourses", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (response.data.purchasedCourses) {
          setPurchasedCourses(response.data.purchasedCourses);
        }
      } catch (error) {
        console.error("Error fetching purchased courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchasedCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
      {purchasedCourses.length > 0 ? (
        purchasedCourses.map((course) => (
          <Course key={course._id} course={course} />
        ))
      ) : (
        <Typography variant="h6">You have not purchased any courses yet.</Typography>
      )}
    </div>
  );
}

export function Course({ course }) {
  const navigate = useNavigate();
  return (
    <Card style={{
      margin: 10,
      width: 300,
      minHeight: 200,
      padding: 20,
      backgroundColor: '#d7d7d7'
    }}>
      <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
      <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
      <img src={course.imageLink} style={{ width: 300 }} alt={course.title} />
      <Button
          size="large"
          variant="contained"
          style={{backgroundColor: 'black', color: 'white', borderRadius: '20px',marginTop:'10px',marginLeft:'80px',}}>
            Get Start
          </Button>
    </Card>
  );
}

export default ListPurchasedCourses;
