import { Routes, Route } from 'react-router-dom';
import UserAppbar from './UserAppbar.jsx';
import UserHome from './UserHome.jsx';
import UserSignup from './UserSignUp.jsx';
import UserSignin from './UserSignIn.jsx';
import ListPurchasedCourses from './ListPurchasedCourses.jsx';
import UserPurchaseCourse from './UserPurchaseCourse.jsx';
import ListAvailableCourses from './ListAvailableCourses.jsx';

const UserRoutes = () => {
  return (
    <div>
    <UserAppbar/>
    <Routes>
      <Route path="/userhome" element={<UserHome />} />
      <Route path="/usersignup" element={<UserSignup />} />
      <Route path="/usersignin" element={<UserSignin />} />
      <Route path="/listcourses" element={<ListAvailableCourses/>} />
      <Route path="/courses/:courseId" element={<UserPurchaseCourse />} />

      <Route path="/userperchasecourses" element={<ListPurchasedCourses/>} />
      
    

    </Routes>
    </div>
  );
};

export default UserRoutes;
