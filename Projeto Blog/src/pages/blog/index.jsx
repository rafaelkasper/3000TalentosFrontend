import { useState } from "react";
import Menu from "../../components/menu";
import Side from "../../components/aside/index";
import Form from "../../components/form";
import Card from "../../components/card";
import Footer from "../../components/footer";
import moment from "moment";
import "./index.css";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || []
  );

  const handleSubmit = () => {
    const data = {
      title: title,
      content: content,
      datePublication: moment().format("DD/MM/YYYY hh:mm"),
    };

    setPosts([...posts, data]);
    localStorage.setItem("posts", JSON.stringify([...posts, data]));
    setTitle("");
    setContent("");
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };

  const postsFiltered = posts.sort((a, b) =>
    a.datePublication < b.datePublication ? 1 : -1
  );

  return (
    <div className="blog-wrapper">
      <div className="header">
        <Menu />
      </div>
      <div className="side">
        <Side />
      </div>
      <div className="main">
        <h3>Título do Blog</h3>
        <Form
          handleSubmit={handleSubmit}
          handleChangeTitle={handleChangeTitle}
          handleChangeContent={handleChangeContent}
        />

        <div className="posts">
          {postsFiltered.map((post, index) => {
            return <Card key={index} post={post} />;
          })}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
