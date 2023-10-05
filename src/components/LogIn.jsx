import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useResponseContext } from "./ResponseContext";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(false);

  const navigate = useNavigate();
  const { handleLogIn } = useResponseContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(value);
    setIsEmailValid(isValid);
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
    <div className="w-96 rounded-xl overflow-hidden bg-zinc-800 bg-opacity-80 text-white m-auto mt-[15%]">
      <h1>
        <a
          className="flex justify-center text-3xl text-white p-8 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
          href="/"
        >
          Workout Chronicle
        </a>
      </h1>
      <div>
        <div>
          <form className="mx-[5%]" onSubmit={handleSubmit}>
            <fieldset className="mt-8">
              <label className="text-white m-[5%]">Email:</label>
              <br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`bg-transparent border-b outline-none ${
                  isEmailValid ? "border-green-600" : "border-red-600 "
                } text-white w-[90%] m-[5%]`}
              />
            </fieldset>
            <fieldset className="mt-2">
              <label className="text-white m-[5%]">Password:</label>
              <br />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="bg-transparent border-b outline-none border-red-600 text-white w-[90%] m-[5%]"
              />
            </fieldset>
            <button
              type="submit"
              className="login bg-blue-500 text-white w-[90%] mx-[5%] mt-[15%] mb-[5%]"
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
