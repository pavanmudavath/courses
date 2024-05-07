import { Card, Grid, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserPurchaseCourse() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("courseId" + courseId);
    axios
      .get(`http://localhost:3000/user/usercourse/${courseId}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCourse(res.data.course);
      });
  }, [courseId]);

  const handlePurchase = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:3000/user/courses/${courseId}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.message === "Course purchased successfully") {
        alert("Course purchased successfully");
      } else {
        alert("Unexpected response from the server");
      }
    } catch (error) {
      console.error("Error purchasing course:", error);
      alert("Error purchasing course. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!course) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading....
      </div>
    );
  }

  return (
    <div>
      <GrayTopper title={course.title} />
      <Grid container justifyContent="center">
        <Grid item lg={4} md={12} sm={12}>
          <Card variant="outlined" style={{ maxWidth: 600, marginTop: 200,marginLeft:75 }}>
            <div style={{ padding: 20 }}>
            <Typography style={{ fontWeight: 'bold', color: '#333' }}>ABOUT AUTHOR</Typography>
              <Typography>
Sam Altman, born in 1985, is a trailblazing tech entrepreneur and investor renowned for co-founding Loopt and serving as the president of Y Combinator. A visionary leader, Altman has significantly shaped the startup landscape by providing early-stage funding and mentorship to groundbreaking companies. His strategic investments and commitment to fostering innovation have solidified his status as a thought leader in Silicon Valley. Co-founding OpenAI, Altman is dedicated to advancing artificial intelligence responsibly, emphasizing ethical considerations. Beyond his professional success, Altman's insightful perspectives on technology's societal impact contribute to his influential role in shaping the future of the tech industry.</Typography>
              <Button style={{backgroundColor: 'black', color: 'white', borderRadius: '20px',marginTop:"10px"}} onClick={handlePurchase} disabled={loading}>
                {loading ? "Purchasing..." : "Purchase Course"}
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item lg={8} md={12} sm={12}>
          <CourseCard course={course} />
        </Grid>
      </Grid>
    </div>
  );
}

function GrayTopper({ title }) {
  return (
    <div style={{ height: 250, background: "#212121", top: 0, width: "100vw", zIndex: 0, marginBottom: -250 }}>
      <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column" }}>
        <div>
          <Typography style={{ color: "white", fontWeight: 600 }} variant="h3" textAlign={"center"}>
            {title}
          </Typography>
        </div>
      </div>
    </div>
  );
}

function CourseCard(props) {
  const course = props.course;
  return (
    <div style={{ display: "flex", marginTop: 50, justifyContent: "center", width: "100%" ,marginLeft:170}}>
      <Card
        style={{
          margin: 10,
          width: 350,
          minHeight: 200,
          borderRadius: 20,
          marginRight: 50,
          paddingBottom: 15,
          zIndex: 2,
        }}
      >
        <img src={course.imageLink} style={{ width: 350 }} alt="course" />
        <div style={{ marginLeft: 10 }}>
          <Typography style={{ fontWeight: 'bold', color: '#333' }} variant="h5">{course.title}</Typography>
          <Typography variant="subtitle2" style={{ color: "gray" }}>
            Price
          </Typography>
          <Typography variant="subtitle1">
            <b>Rs {course.price} </b>
          </Typography>
        </div>
      </Card>
    </div>
  );
}

export default UserPurchaseCourse;
