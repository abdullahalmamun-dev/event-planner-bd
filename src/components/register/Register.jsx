import React, { useContext } from "react";
import Navbar from "../home/Nav/Navbar";
import Footer from "../home/footer/Footer";
import { AuthContext } from "../../providers/Authprovider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, name, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero h-1/2 lg:min-h-screen xl:min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/myynPHq/diamond-sunset.png)",
        }}
      >
        <div className="">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl p-12">
              <form className="card-body" onSubmit={handleRegister}>
                <div className="text-center lg:text-center pt-4">
                  <h1 className="text-4xl font-bold p-10">
                    Register Your Account
                  </h1>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
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
                    placeholder="Enter your password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary font-black">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
