import { useNavigate } from "react-router-dom";
import Menu from "./components/menu";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const authenticated = localStorage.getItem("authenticated");

  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    localStorage.setItem("authenticated", "false");
    navigate("/login");
  };

  return (
    <>
      <Menu />
      <p>Home</p>
      <button onClick={handleLogout}>Sair</button>
    </>
  );
};

export default Home;
