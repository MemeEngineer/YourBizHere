import { useState } from "react";
import { updateInfo, deleteUser } from "../utilities/users-api";

function Settings({ user, setUser }) {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: "",
    newpassword: "",
    confirm: "",
    error: "",
  });
  console.log(user, setUser);
  const disable = formData.newpassword !== formData.confirm;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, error: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      //copy the formData
      const userFormData = { ...formData };
      //delete the extra properties
      delete userFormData.confirm;
      delete userFormData.error;

      //calling user service update function
      const user = await updateInfo(userFormData);
      console.log("USER", user);
      setUser(null);
    } catch (error) {
      console.log(error);
      setFormData({
        ...formData,
        error: "Update Failed - Try Again",
      });
    }
  };

  const handleClick = () => {
    deleteUser() 
    setUser(null)
    localStorage.removeItem('Token')
  }
  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          defaultValue={user.name}
        //  value={user.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          defaultValue={user.email}
        //  value={user.email}
          onChange={handleChange}
          required
        />

        <label>Current Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
 
        <label>New Password</label>
        <input
          type="password"
          name="newpassword"
          onChange={handleChange}
          value={formData.newpassword}
          required
        />

<label>Confirm New Password</label>
        <input
          type="password"
          name="confirm"
          onChange={handleChange}
          value={formData.confirm}
          required
        />

        <button type="submit" disabled={disable}>
          Update
        </button>
      </form>
      <button type= "submit"  onClick={handleClick} style={{color:"white", backgroundColor:"red"}}>Delete Account</button>
    </div>
  );
}

export default Settings;
