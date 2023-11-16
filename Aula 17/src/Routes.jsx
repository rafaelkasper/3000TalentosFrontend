import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Home from "./home";
import Profile from "./profile";
import Error from "./Error";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile/:slug" element={<Profile />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
