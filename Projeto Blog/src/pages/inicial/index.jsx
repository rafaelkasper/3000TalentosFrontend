import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/card";

function Inicial() {
  const [repositoriosList, setRepositoriosList] = useState([]);
  useEffect(() => {
    async function carregaRepositorios() {
      try {
        const response = await axios.get(
          "https://api.github.com/users/rafaelkasper/repos"
        );
        setRepositoriosList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    carregaRepositorios();
  }, []);

  return (
    <div>
      {repositoriosList.map((repositorio) => (
        <Card
          key={repositorio.id}
          title={repositorio.name}
          content={repositorio.description}
          image={repositorio.owner.avatar_url}
          link={repositorio.html_url}
        />
      ))}
    </div>
  );
}

export default Inicial;
