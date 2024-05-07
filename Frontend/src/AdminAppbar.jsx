import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";


function AdminAppbar() {
    const navigate = useNavigate()
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        function callback2(data) {
            if (data.username) {
                setUserEmail(data.username)
            }
        }
        function callback1(res) {
            res.json().then(callback2)
        }
        console.log("token - " + localStorage.getItem("token"));
        fetch("http://localhost:3000/admin/adminme", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1)
    }, []);

    if (userEmail) {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1,
            backgroundColor:"#d7d7d7",
        }}>
            <div style={{marginLeft: 10}}>
                <Typography style={{cursor:'pointer', fontWeight: 'bold', color: '#333'}} variant={"h6"} onClick={()=>{navigate("/")}}>Coursera</Typography>
            </div>
            <div style={{display: "flex"}}>
                <div style={{marginRight: 10, display: "flex"}}>
                <div style={{marginRight: 10}}>
                        <Button
                            onClick={() => {
                                navigate("/admin/adminaddcourse")
                            }}
                        >Add course</Button>
                    </div>

                    <div style={{marginRight: 10}}>
                        <Button
                            onClick={() => {
                                navigate("/admin/admincourses")
                            }}
                        >Courses</Button>
                    </div>

                    <Button style={{backgroundColor: 'black', color: 'white', borderRadius: '20px'}}
                        variant={"contained"}
                        onClick={() => {
                            localStorage.setItem("token", null);
                            window.location = "/";
                        }}
                    >Logout</Button>
                </div>
            </div>
        </div>
    } else {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 8,
            zIndex: 1,backgroundColor:"#d7d7d7",
        }}>
            <div style={{marginLeft: 10}}>
                <Typography style={{cursor:'pointer',fontWeight: 'bold', color: '#333' }} variant={"h6"} onClick={()=>{navigate("/")}}>Coursera</Typography>
            </div>
            
    
            <div style={{display: "flex"}}>
                <div style={{marginRight: 10}}>
                    <Button style={{backgroundColor: 'black', color: 'white', borderRadius: '20px'}}
                        variant={"contained"}
                        onClick={() => {
                            navigate("/admin/adminsignup")
                        }}
                    >Signup</Button>
                </div>
                <div>
                    <Button style={{backgroundColor: 'black', color: 'white', borderRadius: '20px'}}
                        variant={"contained"}
                        onClick={() => {
                            navigate("/admin/adminsignin")
                        }}
                    >Signin</Button>
                </div>
            </div>
        </div>
    }
}

export default AdminAppbar;