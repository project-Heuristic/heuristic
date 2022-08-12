import "./App.css";
import Homepage from "./pages/homepage";
import ProtectedRoute from "./protectedRoute.js"
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login.page";
import Signup from "./pages/SignupPage.js";
import ForgotPassword from "./pages/forgotPassword";
import ResetPassword from "./pages/resetPasword";
import Students from "./students/index";
import {UserAuthContextProvider} from './context/userAuthContext'
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
        <Route path="students" element={<ProtectedRoute><Students /></ProtectedRoute>}></Route>
      </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
