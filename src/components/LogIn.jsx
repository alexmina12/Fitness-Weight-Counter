import React, { useState } from "react";
import styles from "./Login.module.css";
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
    <div className={styles.container}>
      <h1 className={styles.login_title}>
        <a href="/">Workout Chronicle</a>
      </h1>
      <div className={styles.form1}>
        <div className={styles.form2}>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label>Email:</label>
              <br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </fieldset>
            <fieldset>
              <label>Password:</label>
              <br />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </fieldset>
            <button type="submit" className={styles.login}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
