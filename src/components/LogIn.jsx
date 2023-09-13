import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useResponseContext } from "./ResponseContext";

function Login() {
  const { handleResponse } = useResponseContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
      const response = await fetch("http://localhost:1024/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      await handleResponse(response);

      if (response.ok) {
        const data = await response.json();
        navigate("/");
        console.log("Răspuns de la server:", data);
      } else {
        const errorData = await response.json();
        console.error("Eroare la autentificare:", errorData.message);
      }
    } catch (error) {
      console.error("Eroare la autentificare:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>
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
