import "./App.css";
import Homepage from "./pages/homepage";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/login.page";
import Signup from "./pages/SignupPage.js";
import ForgotPassword from "./pages/forgotPassword";
import ResetPassword from "./pages/resetPasword";
import Students from "./students/index";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />

        <Route path="signup" element={<Signup />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="resetPassword" element={<ResetPassword />} />
        <Route path="students" element={<Students/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
