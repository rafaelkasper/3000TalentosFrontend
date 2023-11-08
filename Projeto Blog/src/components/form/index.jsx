import "./index.css";
const Form = ({ handleSubmit, handleChangeTitle, handleChangeContent }) => {
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChangeTitle}
        placeholder="Digite o título da postagem"
      />
      <input
        type="text"
        onChange={handleChangeContent}
        placeholder="Digite o conteúdo da postagem"
      />
      <button type="submit">Salvar post</button>
    </form>
  );
};

export default Form;
