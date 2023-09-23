import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useResponseContext } from "./ResponseContext";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { handleLogIn } = useResponseContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1024/Login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        handleLogIn();
        navigate("/");
        console.log("Răspuns de la server:", response.data);
      } else {
        console.error("Eroare la autentificare:", response.data.message);
      }
    } catch (error) {
      console.error("Eroare la autentificare:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="login_title">
        <a href="/">Workout Chronicle</a>
      </h1>
      <div className="form1">
        <div className="form2">
          <form onSubmit={handleSubmit}>
            <fieldset className="mt-10">
              <label className="text-white">Email:</label>
              <br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-transparent text-white"
              />
            </fieldset>
            <fieldset className="mt-10">
              <label className="text-white">Password:</label>
              <br />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="bg-transparent text-white"
              />
            </fieldset>
            <button
              type="submit"
              className="login bg-blue-500 text-white mt-10"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
