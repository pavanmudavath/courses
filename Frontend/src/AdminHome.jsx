import { Card ,Button,Typography,} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import AiImage from './assets/images.jpeg';
import BalckChain from './assets/download.jpeg';
import DevOPsImg from './assets/download (2).png';
import machineLearImg from './assets/images (1).jpeg';


const AdminHome = () => {
  const navigate = useNavigate();
  return (
    <div style={{
         textAlign: 'center', 
         marginTop: '20px', 
     }}>
    <Typography style={{fontWeight: 'bold', color: '#333'}} variant="h6">Admin Dashboard</Typography>
    <Typography style={{ marginBottom:'20px',marginTop:'20px', marginLeft:'120px',color: '#333', marginRight:'150px'}} variant="h6">Welcome to the Admin Dashboard. Explore, manage, and create new courses with ease.</Typography>
   <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}} >
      <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 40,
        justifyContent:"center",
        backgroundColor: '#d7d7d7'
       }}>
        <Typography style={{fontWeight: 'bold', color: '#333'}} textAlign={"center"} variant="h5">WebDevelopment</Typography>
        <Typography textAlign={"center"} variant="subtitle1"> Creates interactive websites and apps, with front-end focusing on design and back-end managing functionality</Typography>
        <img style={{ width: 300 }} src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg" alt="webImage" />

        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            <Button 
            variant="contained"
             size="large"  
             style={{backgroundColor: 'black', color: 'white', borderRadius: '20px'}}
             onClick={() => navigate("/admin/adminsignup")}>
            Get Started Now!</Button>
        </div>
    </Card>
      <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 40,
        justifyContent:"center",
        backgroundColor: '#d7d7d7'
       }}>
        <Typography style={{fontWeight: 'bold', color: '#333'}} textAlign={"center"} variant="h5">Artificial Intelligence(AI)</Typography>
        <Typography textAlign={"center"} variant="subtitle1">Empowers machines to mimic human intelligence, driving advancements in natural language processing and image recognition.</Typography>
        <img style={{ width: 300 }} src={AiImage} alt="aiImage" />


        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            <Button 
            variant="contained"
             size="large"  
             style={{backgroundColor: 'black', color: 'white', borderRadius: '20px'}}
             onClick={() => navigate("/admin/adminsignup")}>
            Get Started Now!</Button>
        </div>
    </Card>
      <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 40,
        justifyContent:"center",
        backgroundColor: '#d7d7d7'
       }}>
        <Typography style={{fontWeight: 'bold', color: '#333'}} textAlign={"center"} variant="h5">Machine Learning(ML)</Typography>
        <Typography textAlign={"center"} variant="subtitle1">Trains Algorithms to make predictions from data, fueling personalized recommendations and fraud detection.

</Typography>
        <img style={{ width: 300 }} src={BalckChain} alt="BalckChain" />

        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            <Button 
            variant="contained"
             size="large"  
             style={{backgroundColor: 'black', color: 'white', borderRadius: '20px'}}
             onClick={() => navigate("/admin/adminsignup")}>
            Get Started Now!</Button>
        </div>
    </Card>
      <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 40,
        justifyContent:"center",
        backgroundColor: '#d7d7d7'
       }}>
       <Typography style={{fontWeight: 'bold', color: '#333'}} textAlign={"center"} variant="h5">DevOps</Typography>
        <Typography textAlign={"center"} variant="subtitle1">Unifies software development and IT operations, fostering collaboration and automating efficient delivery.</Typography>
        <img style={{ width: 300 }} src={ DevOPsImg } alt=" DevOPsImg " />

        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            <Button 
            variant="contained"
             size="large"  
             style={{backgroundColor: 'black', color: 'white', borderRadius: '20px'}}
             onClick={() => navigate("/admin/adminsignup")}>
            Get Started Now!</Button>
        </div>
    </Card>
      <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 30,
        justifyContent:"center",
        backgroundColor: '#d7d7d7'
       }}>
       <Typography style={{fontWeight: 'bold', color: '#333'}} textAlign={"center"} variant="h5">Blockchain</Typography>
        <Typography textAlign={"center"} variant="subtitle1">Decentralized ledger tech ensures tamper-resistant record-keeping, vital for cryptocurrencies and transparent transactions</Typography>
        <img style={{ width: 300 }} src={machineLearImg} alt="machineLearImg" />

        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            <Button 
            variant="contained"
             size="large"  
             style={{backgroundColor: 'black', color: 'white', borderRadius: '20px'}}
             onClick={() => navigate("/admin/adminsignup")}>
            Get Started Now!</Button>
        </div>
    </Card>
      
      
      </div>
    </div>
    );

}

export default AdminHome;