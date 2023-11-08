import "./index.css";
const Card = ({ title, content, image, link }) => {
  return (
    <article className="card">
      <img src={image} alt="imagem do card" />
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <a href={link}>Acessar Repositório</a>
    </article>
  );
};

export default Card;
