import React from "react";
import { useParams } from "react-router-dom";
const Profile = () => {
  const { slug } = useParams();
  return <h1>Profile de {slug}</h1>;
};

export default Profile;
