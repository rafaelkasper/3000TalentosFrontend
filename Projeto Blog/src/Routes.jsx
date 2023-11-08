import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="profile/:slug" element={<Profile />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
