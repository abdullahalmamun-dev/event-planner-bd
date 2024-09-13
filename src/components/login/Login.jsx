import React, { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    signIn(email, password)
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
    <div className="flex justify-center items-center my-10 h-100% bg-white">
      <div className="bg-white rounded-lg shadow-lg p-14 w-full max-w-md bg-gray-200">
        <h1 className="text-xl md:text-4xl font-bold mb-6 text-center text-[#003366]">
          SIGN IN INTO YOUR ACCOUNT
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-[#003366]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#FFD700]"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block font-bold mb-2 text-[#003366]"
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
          <div className="text-center grid md:flex gap-5 md:justify-between items-center">
            <div>
              <button
                className="text-sm md:text-lg  bg-[#FFD700] hover:bg-[#FFC107] text-[#003366] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                SIGN IN
              </button>
            </div>
            <div>
              <button
                className="text-sm md:text-lg bg-[#FFD700] hover:bg-[#FFC107] text-[#003366] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleGoogleSignIn}
              >
                Sign In with Google
              </button>
            </div>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-[#003366]">
            Don't Have An Account?{" "}
            <a href="/register" className="text-red-900 hover:text-red-700">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
