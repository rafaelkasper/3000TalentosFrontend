import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "usuario" && password === "senha") {
      localStorage.setItem("authenticated", "true");
      navigate("/home");
    } else {
      alert("Os dados estão incorretos");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Digite o usuário"
        onChange={handleChangeUser}
        value={user}
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        onChange={handleChangePassword}
        value={password}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
