// Account.js
import React, { useState } from "react";
import styles from "./AccountPage.module.css";
import axios from "axios";

function Account() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:1024/Account",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Eroare la înregistrare:", error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1>
          <a href="/"> Workout Chronicle</a>
        </h1>
        <div className={styles.form1}>
          <div className={styles.form2}></div>
        </div>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="firstName">First Name:</label>
            <br />
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="lastName">Last Name:</label>
            <br />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <br />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </fieldset>
          <button type="submit" className={styles.create}>
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default Account;
