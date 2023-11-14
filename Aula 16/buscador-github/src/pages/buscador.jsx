import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MaterialCard from "../components/card";
const Buscador = () => {
  const [user, setUser] = useState("");
  const [repositories, setRepositories] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );

      setRepositories(response.data);

      setUser("");
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue !== "") {
      setUser(inputValue);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Digite um usuário do Github"
          variant="outlined"
          onChange={handleChange}
          value={user}
          size="small"
          color="error"
        />
        <Button type="submit" variant="outlined" color="error">
          Buscar
        </Button>
      </form>
      <Grid container spacing={2}>
        {repositories.map((repository, index) => {
          return (
            <Grid item xs={6} md={6} key={index}>
              <MaterialCard key={index} repository={repository} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Buscador;
