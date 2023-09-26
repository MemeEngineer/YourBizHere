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
      <Link to="/orders">
        <button style={{fontSize: "14px"}}>Order History</button>
        
      </Link>
      <Link to="/orders/new">
        <button style={{fontSize: "14px"}}>

        New Order
        </button>
      </Link>
      <Link to="/settings">
       <button style={{fontSize: "14px"}}>
       Settings
        </button> 
      </Link>
      {user.isAdmin ? (
        <Link to="/admin">
          <button style={{fontSize: "14px"}}>DashBoard</button>
        </Link>
      ) : null}
      <Link to="" onClick={handleLogOut} s>
        <button style={{fontSize: "14px"}}>Log Out</button>
      </Link>
    </nav>
  );
}

export default NavBar;
