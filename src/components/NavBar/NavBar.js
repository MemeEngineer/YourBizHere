import {Link} from 'react-router-dom'
import * as usersService from '../../utilities/users-service'
// import Logo from "../Logo/Logo.js"
import styles from "./NavBar.module.css"
import YourBizHere from "../../assets/YourBizHere.gif"

function NavBar({user, setUser}){

    const handleLogOut = () => {
        usersService.logOut();
        setUser(null)
    }
    return(
        <nav className={styles.NavBar}>
            <img src={YourBizHere} alt="logo"/>
            <h3>Welcome, {user.name}</h3>
            <Link to="/orders"> Order History </Link> &nbsp; | &nbsp;
            <Link to='/orders/new'> New Order </Link> &nbsp; | &nbsp;
            <Link to='/settings'>Settings</Link> &nbsp; | &nbsp;
            {user.isAdmin ? (<Link to='/admin'>DashBoard</Link>) : null}&nbsp; | &nbsp;
            <Link to='' onClick={handleLogOut}>Log Out</Link>
        
        </nav>
    )
}

export default NavBar;