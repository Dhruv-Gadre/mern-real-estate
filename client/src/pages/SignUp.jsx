import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="flex flex-col justify-center bg-slate-800 shadow-2xl rounded-2xl p-8 w-full max-w-lg min-h-[80vh]">
        {/* Title */}
        <h1 className=" text-3xl font-bold text-center text-white mb-6">
          Create <span className="text-cyan-400">Account</span>
        </h1>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <div className="flex items-center bg-slate-700 rounded-lg px-3">
            <FaUser className="text-slate-400" />
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="bg-transparent flex-1 p-3 focus:outline-none text-white placeholder-slate-400"
            />
          </div>

          <div className="flex items-center bg-slate-700 rounded-lg px-3">
            <FaEnvelope className="text-slate-400" />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="bg-transparent flex-1 p-3 focus:outline-none text-white placeholder-slate-400"
            />
          </div>

          <div className="flex items-center bg-slate-700 rounded-lg px-3">
            <FaLock className="text-slate-400" />
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="bg-transparent flex-1 p-3 focus:outline-none text-white placeholder-slate-400"
            />
          </div>

          <button className="mt-2 bg-cyan-500 text-white py-3 rounded-lg uppercase font-semibold hover:bg-cyan-600 transition-all">
            Sign Up
          </button>
        </form>

        {/* Switch to Sign In */}
        <div className="flex justify-center gap-2 mt-6 text-slate-300">
          <p>Already have an account?</p>
          <Link to="/sign-in">
            <span className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Sign In
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
