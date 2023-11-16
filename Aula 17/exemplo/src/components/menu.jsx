import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/profile">Acessar Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
