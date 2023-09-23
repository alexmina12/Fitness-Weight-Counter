import React, { useState } from "react";
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
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-opacity-50 to-opacity-50 via-opacity-0 inset-0 conic-gradient from-0 to-360 #4b4a4b bg-dotted border-2 border-transparent rounded-3xl bg-clip-padding-box bg-origin-border-box animate-rotate animate-shadowRotate">
        <h1 className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
          <a href="/" className="text-white text-xl">
            {" "}
            Workout Chronicle
          </a>
        </h1>
        <div className="w-96 h-96 bg-green-700 border rounded-xl absolute z-0 top-24 mx-auto -translate-y-1/2"></div>

        <form onSubmit={handleSubmit} className="z-10">
          <fieldset className="m-4 bg-gray-900 text-white text-xl px-2 py-1 rounded-2xl border-none">
            <label htmlFor="firstName" className="block">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="block bg-transparent text-white w-72"
            />
          </fieldset>
          <fieldset className="m-4 bg-gray-900 text-white text-xl px-2 py-1 rounded-2xl border-none">
            <label htmlFor="lastName" className="block">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="block bg-transparent text-white w-72"
            />
          </fieldset>
          <fieldset className="m-4 bg-gray-900 text-white text-xl px-2 py-1 rounded-2xl border-none">
            <label htmlFor="email" className="block">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block bg-transparent text-white w-72"
            />
          </fieldset>
          <fieldset className="m-4 bg-gray-900 text-white text-xl px-2 py-1 rounded-2xl border-none">
            <label htmlFor="password" className="block">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block bg-transparent text-white w-72"
            />
          </fieldset>
          <fieldset className="m-4 bg-gray-900 text-white text-xl px-2 py-1 rounded-2xl border-none">
            <label htmlFor="confirmPassword" className="block">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="block bg-transparent text-white w-72"
            />
          </fieldset>
          <button
            type="submit"
            className="block bg-gray-700 text-white rounded-2xl px-4 py-2 mx-auto"
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default Account;
