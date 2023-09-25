import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-service";
// import Logo from "../Logo/Logo.js"
import styles from "./NavBar.module.css";
import YourBizHere from "../../assets/YourBizHere.gif";
import { useState } from "react";

function NavBar({ user, setUser }) {
  const [active, setActive] = useState("");

  const handleLogOut = () => {
    usersService.logOut();
    setUser(null);
  };

  const handleClickNav = (e) => {
    
    setActive(e.target.text);
  };
  return (
    <nav
      className={styles.NavBar}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Link to="/orders/new">
        <img src={YourBizHere} alt="logo" />
      </Link>
      <h3>Welcome {user.name}!</h3>
      <Link to="/orders" style={{ textDecoration: "none"}} >
        
        Order History
      </Link>
      <Link to="/orders/new" style={{ textDecoration: "none"}}>
        
        New Order
      </Link>
      <Link to="/settings" style={{ textDecoration: "none" }}>
        Settings
      </Link>
      {user.isAdmin ? (
        <Link to="/admin" style={{ textDecoration: "none" }}>
          DashBoard
        </Link>
      ) : null}
      <Link to="" onClick={handleLogOut} style={{ textDecoration: "none" }}>
        Log Out
      </Link>
    </nav>
  );
}

export default NavBar;
