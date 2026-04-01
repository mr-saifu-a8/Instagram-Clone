import { Home, Heart, MessageCircle, PlusSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onCreatePost }) => {
  const navigate = useNavigate()
  return (
    <nav className="navbar">
      <div className="navbar__logo">Instagram</div>
      <div className="navbar__icons">
        <button className="create-btn" onClick={() => {
          navigate("/create-post");
        }}>
          <PlusSquare size={16} />
          Create
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
