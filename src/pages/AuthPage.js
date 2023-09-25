import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from "../components/LogInForm/LoginForm";
import { useState } from "react";
import styles from "./AuthPage.module.css";
// import Logo from '../components/Logo/Logo.js';

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from '@mui/material/Stack';

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  function handleChange(){
       setShowLogin(!showLogin)     
  }
  return (
    <main className={styles.AuthPage}>
      <div className={styles.AuthForm}>
        {/* <h3 onClick={() => setShowLogin(!showLogin)}>
          {" "}
          {showLogin ? "Sign Up" : "Log In"}
        </h3> */}
        <h3>{showLogin ? "Login Page" : "Sign Up"}</h3>
        
        {showLogin ? (
          <LoginForm setUser={setUser} />
        ) : (
          <SignUpForm setUser={setUser} />
        )}
          <FormGroup>
            <Stack direction="row" spacing={1} alignItems="center">
            <p>Sign Up</p>
          <FormControlLabel control={<Switch defaultChecked onChange={handleChange}/>} />
          <p>Log In</p>
          </Stack>
        </FormGroup>
      </div>
    </main>
  );
}

export default AuthPage;
