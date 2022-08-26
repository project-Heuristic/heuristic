import "./App.css";
import Homepage from "./pages/homepage";
import ProtectedRoute from "./protectedRoute.js";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login.page";
import Signup from "./pages/SignupPage.js";
import ForgotPassword from "./pages/forgotPassword";
import ResetPassword from "./pages/resetPasword";
import Feedback from "./components/feedback/feedback"

//students////
import Students from "./students/index";
import StudentsDash from "./students/components/Dahboard/dashboard.jsx";
import StudentsProfile from "./students/components/Profile/Profile.js";
import StudentsHistory from "./students/components/History/History.js";
import StudentSession from "./students/components/sessions/sessions.js";

//teachers/////
import Teacher from "./teacher/index.js";

import { UserAuthContextProvider } from "./context/userAuthContext";
import Dashboard from "./teacher/components/Dahboard/dashboard.jsx";
import Profile from "./teacher/components/Profile/Profile.js";
import AppointMents from "./teacher/components/AppointMents/AppointMents.js";
import History from "./teacher/components/History/History.js";



//admin///
import Admin from "./Admin/index.js";
import AdminDashboard from "./Admin/components/Dahboard/dashboard.jsx";
import AdminProfile from "./Admin/components/Profile/Profile.js";
import VideoCall from "./students/components/videocall";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="resetPassword" element={<ResetPassword />} />

          <Route path="students" element={<ProtectedRoute><Students></Students> </ProtectedRoute>}>
            <Route path="dashboard" element={<ProtectedRoute> <StudentsDash></StudentsDash></ProtectedRoute>}></Route>
            <Route path="profile" element={<StudentsProfile></StudentsProfile>}></Route>
            <Route path="history" element={<StudentsHistory></StudentsHistory>}></Route>
            <Route path="sessions" element={<StudentSession></StudentSession>}></Route>

          </Route>
          <Route path="teacher" element={<Teacher></Teacher>}>
            <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="profile" element={<Profile></Profile>}></Route>
            <Route path="history" element={<History></History>}></Route>
            <Route
              path="appointments"
              element={<AppointMents></AppointMents>}
            ></Route>
          </Route>
          <Route path="Admin" element={<Admin></Admin>}>
            <Route path="dashboard" element={<AdminDashboard></AdminDashboard>}></Route>
            <Route path="profile" element={<AdminProfile></AdminProfile>}></Route>
            
            <Route
              path="appointments"
              element={<AppointMents></AppointMents>}
            ></Route>
          </Route>
          <Route path="feedback" element={<Feedback></Feedback>}></Route>
          <Route path="/call" element={<VideoCall></VideoCall>}></Route>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
