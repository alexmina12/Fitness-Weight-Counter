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
      <div className="my-[8%] flex items-center justify-center bg-black-800">
        <div className="w-96 rounded-xl overflow-hidden bg-zinc-800 bg-opacity-80 text-white">
          <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 p-8">
            <h1 className="text-3xl font-semibold text-center">
              <a href="/" className="text-white-500">
                Workout Chronicle
              </a>
            </h1>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <fieldset className="mb-4">
                <label htmlFor="firstName" className="text-white">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full py-2 px-4 bg-transparent text-white border-b-2 border-gray-500 focus:outline-none focus:border-green-400"
                />
              </fieldset>
              <fieldset className="mb-4">
                <label htmlFor="lastName" className="text-white">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full py-2 px-4 bg-transparent text-white border-b-2 border-gray-500 focus:outline-none focus:border-green-400"
                />
              </fieldset>
              <fieldset className="mb-4">
                <label htmlFor="email" className="text-white">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-2 px-4 bg-transparent text-white border-b-2 border-gray-500 focus:outline-none focus:border-green-400"
                />
              </fieldset>
              <fieldset className="mb-4">
                <label htmlFor="password" className="text-white">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full py-2 px-4 bg-transparent text-white border-b-2 border-gray-500 focus:outline-none focus:border-green-400"
                />
              </fieldset>
              <fieldset className="mb-4">
                <label htmlFor="confirmPassword" className="text-white">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full py-2 px-4 bg-transparent text-white border-b-2 border-gray-500 focus:outline-none focus:border-green-400"
                />
              </fieldset>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
