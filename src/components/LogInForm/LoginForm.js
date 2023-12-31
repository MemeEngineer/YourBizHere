import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import YourBizHere from "../../assets/YourBizHere.gif"
import './LoginForm.module.css'

export default function LoginForm({ setUser }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await usersService.login(credentials);
    setUser(user);
  } catch {
    setError('Log In Failed - Try Again');
  }
}

function adminLogin(){
setCredentials({email: "admin@gmail.com", password:"admin123"})
}


return (
  <div>
    <p className="error-message">&nbsp;{error}</p>
    <div className="form-container"  style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center"}}onSubmit={handleSubmit}>
      <img src={YourBizHere} alt="logo" />
      <form autoComplete="off" >
        <label>Email</label>
        <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        <button type="submit">LOG IN</button>
        
      </form>
      <button type="submit" onClick={adminLogin}> ADMIN LOG IN</button>
    </div>
    
  </div>
);
}