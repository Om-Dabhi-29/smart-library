import { Link } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
} from "react-icons/fa";

function RegisterForm() {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">
          Smart Library
        </h1>

        <p className="text-gray-500 mt-2">
          Create Your Account
        </p>
      </div>

      <form className="space-y-5">

        {/* Full Name */}
        <div>
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <div className="flex items-center border rounded-lg px-3">
            <FaUser className="text-gray-400" />

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <div className="flex items-center border rounded-lg px-3">
            <FaEnvelope className="text-gray-400" />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 font-medium">
            Mobile Number
          </label>

          <div className="flex items-center border rounded-lg px-3">
            <FaPhone className="text-gray-400" />

            <input
              type="tel"
              placeholder="Enter mobile number"
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        {/* Role */}
        <div>
          <label className="block mb-2 font-medium">
            Role
          </label>

          <select className="w-full border rounded-lg p-3 outline-none">
            <option>Student</option>
            <option>Librarian</option>
          </select>
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 font-medium">
            Password
          </label>

          <div className="flex items-center border rounded-lg px-3">
            <FaLock className="text-gray-400" />

            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-2 font-medium">
            Confirm Password
          </label>

          <div className="flex items-center border rounded-lg px-3">
            <FaLock className="text-gray-400" />

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full p-3 outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Create Account
        </button>
      </form>

      <div className="text-center mt-6">
        <p className="text-gray-500">
          Already have an account?
        </p>

        <Link
          to="/login"
          className="text-blue-700 font-semibold hover:underline"
        >
          Login
        </Link>
      </div>

    </div>
  );
}

export default RegisterForm;