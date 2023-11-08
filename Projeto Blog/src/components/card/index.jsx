import "./index.css";
import moment from "moment";
const Card = ({ post }) => {
  return (
    <article className="post">
      <div>
        <h6 className="post-title">{post.title}</h6>
        <p className="post-content">{post.content}</p>
        <p className="post-date">
          {moment(post.datePublication).format("LLL").toString()}
        </p>
      </div>
    </article>
  );
};

export default Card;
