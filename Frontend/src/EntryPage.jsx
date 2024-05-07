import { Button, Card, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import adminImageIcon from './assets/admin-user-icon-12.jpg';
import userImageIcon from './assets/4403519.png';
import backImg from './assets/istockphoto-500507478-170667a.webp';

const Ahome = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw', backgroundImage: `url(${backImg})`, backgroundSize: 'cover' }}>
      <Typography style={{ fontWeight: 'bold', color: '#333' }} variant="h6"> Welcome to the CourseApp </Typography>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ marginLeft: '0px', marginTop: '20px', width: '18%', height: '300px', backgroundColor: '#d7d7d7' }}>
          <img style={{ marginLeft: '30px', marginTop: '20px', width: '80%' }} src={adminImageIcon} alt="adminimageIcon" />
          <Button
            style={{ marginTop: "5px", marginLeft: '100px', backgroundColor: 'black', color: 'white', borderRadius: '20px' }}
            onClick={() => navigate('/admin/adminhome')}
          >
            Admin
          </Button>
        </Card>

        <Card style={{ marginLeft: '50px', marginTop: '20px', width: '18%', height: '300px', backgroundColor: '#d7d7d7' }}>
          <img style={{ marginLeft: '30px', marginTop: '20px', width: '80%' }} src={userImageIcon} alt="adminimageIcon" />
          <Button
            style={{ marginTop: "5px", marginLeft: '100px', backgroundColor: 'black', color: 'white', borderRadius: '20px' }}
            onClick={() => navigate('/user/userhome')}
          >
            User
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Ahome;
