import React, { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    signIn(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div>
      <div
        className="hero h-1/2 lg:min-h-screen xl:min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/myynPHq/diamond-sunset.png)",
        }}
      >
        <div>
          <div className="hero bg-base-200 w-full p-10 h-full">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card bg-base-100 w-full shrink-0 shadow-2xl p-12">
                <form className="card-body" onSubmit={handleLogin}>
                  <div className="text-center lg:text-center pt-4">
                    <h1 className="text-4xl font-bold p-10">
                      Login Your Account
                    </h1>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                    <div className="text-center mt-4">
                      <p>
                        Don't Have An Account?{" "}
                        <a href="/register" className="text-xl">
                          <span className="text-red-900">Register</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
