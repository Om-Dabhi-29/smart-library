import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-blue-700">
          📚 Smart Library
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-blue-700 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/books" className="hover:text-blue-700 transition">
              Books
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-700 transition">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-700 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <Link
            to="/login"
            className="px-5 py-2 border border-blue-700 rounded-lg text-blue-700 hover:bg-blue-700 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 bg-blue-700 rounded-lg text-white hover:bg-blue-800 transition"
          >
            Register
          </Link>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;