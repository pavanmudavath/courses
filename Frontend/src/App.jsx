import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import EntryPage from "./EntryPage.jsx";
  import AdminRoutes from './AdminRoutes.jsx'; 
  import UserRoutes from './UserRoutes.jsx';
  const App = () => { 
    return (
       <div style={{ width: '100vw', height: '100vh'}}>
         <Router> 
          <Routes>
             <Route path="/" element={<EntryPage/>}/>
              <Route path="/admin/*" element={<AdminRoutes/>}/> 
              <Route path="/user/*" element={<UserRoutes/>}/> 
              </Routes>
               </Router> 
               </div> 
               ); 
              }
 export default App;