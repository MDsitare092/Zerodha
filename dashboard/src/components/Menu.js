import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Menu = ({ setAuth }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3002/logout', {}, { withCredentials: true });
      window.location.href = 'http://localhost:3000/login';
    } catch {
      alert("Logout failed");
    }
  };


  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li><Link to="/" onClick={() => handleMenuClick(0)}><p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p></Link></li>
          <li><Link to="/orders" onClick={() => handleMenuClick(1)}><p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p></Link></li>
          <li><Link to="/holdings" onClick={() => handleMenuClick(2)}><p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p></Link></li>
          <li><Link to="/positions" onClick={() => handleMenuClick(3)}><p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p></Link></li>
          <li><Link to="/funds" onClick={() => handleMenuClick(4)}><p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p></Link></li>
          <li><Link to="/apps" onClick={() => handleMenuClick(5)}><p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p></Link></li>
        </ul>
        <hr />
        <div className="profile" onClick={handleLogout}>
          <div className="avatar">MR</div>
          <p className="username">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;