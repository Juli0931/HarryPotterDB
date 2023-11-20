import { IoIosFlash } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
    <nav className="navBar">
      <div className="menu-btn">
        <button>
          <IoIosFlash size="30" />
        </button>
      </div>
      <h1>Hogwarts Connect</h1>
      <div
        className="profile"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <img
          src="./src/assets/userPhotoJuli.jpg"
          width="38px"
          alt="User profile"
        />
        {showDropdown && (
          <div className="dropdown-menu">
            <button className="dropdown-btn">Profile</button>
            <button className="dropdown-btn">Settings</button>
            <button className="dropdown-btn" onClick={handleLogout}>
              Log out
            </button>
          </div>
        )}
      </div>
    </nav>
    </>
  );
}
