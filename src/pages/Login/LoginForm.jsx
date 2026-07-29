import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

function LoginForm() {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">
          Smart Library
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome Back!
        </p>
      </div>

      <form className="space-y-5">

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

        {/* Password */}

        <div>

          <label className="block mb-2 font-medium">
            Password
          </label>

          <div className="flex items-center border rounded-lg px-3">

            <FaLock className="text-gray-400" />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 outline-none"
            />

          </div>

        </div>

        {/* Remember */}

        <div className="flex justify-between items-center text-sm">

          <label className="flex items-center gap-2">

            <input type="checkbox" />

            Remember Me

          </label>

          <Link
            to="/forgot-password"
            className="text-blue-700 hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Button */}

        <button
          className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Login
        </button>

      </form>

      <div className="mt-6 text-center">

        <p className="text-gray-500">
          Don't have an account?
        </p>

        <Link
          to="/register"
          className="text-blue-700 font-semibold hover:underline"
        >
          Register
        </Link>

      </div>

    </div>
  );
}

export default LoginForm;