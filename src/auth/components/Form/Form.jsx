import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "../Button/Button";

export function Form() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = formData;

    console.log("Username:", username);
    console.log("Password:", password);

    navigate("/dashboard");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Karol"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Shh, it's a secret!"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Button labelText="Login" type="submit" />
        </div>
      </form>
    </div>
  );
}
