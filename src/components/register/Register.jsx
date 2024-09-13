import React, { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    createUser(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center h-100% my-10 mx-2 bg-white">
      <div className="bg-gray-200 rounded-lg shadow-lg p-8 w-full max-w-md ">
        <h1 className="text-xl md:text-3xl font-bold mb-6 text-center text-[#003366]">
          REGISTER YOUR ACCOUNT
        </h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              className="block font-bold mb-5 text-[#003366]"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border  border-gray-300 rounded focus:outline-none focus:border-[#FFD700]"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-5 text-[#003366]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#FFD700]"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block font-bold mb-5 text-[#003366]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#FFD700]"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="grid gap-5 text-center md:flex justify-center md:justify-between items-center">
            <div>
              <button
                className="text-sm bg-[#FFD700] hover:bg-[#FFC107] text-[#003366] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                REGISTER
              </button>
            </div>
            <div>
              <button
                className="text-sm bg-[#FFD700] hover:bg-[#FFC107] text-[#003366] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleGoogleSignIn}
              >
                REGISTER WITH GOOGLE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
