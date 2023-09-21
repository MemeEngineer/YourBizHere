import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from "../components/LogInForm/LoginForm";
import {useState} from 'react'
import styles from './AuthPage.module.css';
// import Logo from '../components/Logo/Logo.js';

function AuthPage({setUser}){
    const [showLogin, setShowLogin] = useState(true)
    return(
        <main className ={styles.AuthPage}>
        <div>
           
            <h3 onClick={()=> setShowLogin(!showLogin)}> {showLogin ? "Sign Up" : "Log In"}</h3>
           { showLogin ? 
           
           (<LoginForm setUser={setUser}/> ) :
           (<SignUpForm setUser={setUser}/>) 
           }
        </div>
        </main>
    )
}

export default AuthPage;