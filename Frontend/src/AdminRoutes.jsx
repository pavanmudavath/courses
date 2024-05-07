import { Routes, Route } from 'react-router-dom';
import AdminAppbar from './AdminAppbar.jsx';
import AdminHome from './AdminHome.jsx'
import AdminSignup from "./AdminSignup.jsx";
import AdminSignin from "./AdminSignin.jsx";
import AdminAddCourse from "./AdminAddCourse.jsx";
import AdminCourses from "./AdminCourses.jsx";
import AdminCourse from "./AdminCourse.jsx";
import AdminPage from './AdminPage.jsx';

const AdminRoutes = () => {
  return (
    <div>
    <AdminAppbar/>
    <Routes>
      <Route path="/adminpage" element={<AdminPage />} />
      <Route path="/adminhome" element={<AdminHome />} />
      <Route path="/adminsignup" element={<AdminSignup />} />
      <Route path="/adminsignin" element={<AdminSignin />} />
      <Route path="/adminaddcourse" element={<AdminAddCourse />} />
      <Route path="/admincourses" element={<AdminCourses />} />
      <Route path="/admincourse/:courseId" element={<AdminCourse />} />

    </Routes>
    </div>
  );
};

export default AdminRoutes;

//<Route path="/adminsignin" element={<AdminSignin />} />
//           <Route path="/adminsignup" element={<AdminSignup />} />
//           <Route path="/addcourse" element={<AdminAddCourse />} />
//           <Route path="/course/:courseId" element={<AdminCourse />} />
//           <Route path="/courses" element={<AdminCourses />} />



