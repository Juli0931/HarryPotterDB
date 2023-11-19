import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Form.css";

export function Form() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    console.log("Enviando...")
    event.preventDefault();
    const { username, password } = formData;

    console.log("Username:", username);
    console.log("Password:", password);

    navigate("/dashboard");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="groupForm">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="e.g. Karol"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="groupForm">
          <label htmlFor="password">Password</label>
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
          <Button labelText="Log in" type="submit"/>
        </div>
      </form>
    </div>
  );
}
