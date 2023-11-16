import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const { slug } = useParams();
  return (
    <>
      <Link to="/home">Voltar para home</Link>
      {slug ? <p>Profile de {slug}</p> : <p>Perfil não encontrado</p>}
    </>
  );
};

export default Profile;
