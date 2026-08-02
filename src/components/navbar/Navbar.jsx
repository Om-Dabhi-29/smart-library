import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
<Link
  to="/"
  className="flex items-center gap-3"
>
  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-700 text-white text-2xl shadow-md">
    📚
  </div>

  <div>
    <h1 className="text-2xl font-bold text-blue-700 leading-none">
      SmartLibrary
    </h1>

    <p className="text-xs text-gray-500">
      Digital Library
    </p>
  </div>
</Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li>
            <Link to="/" className="transition-all duration-300 hover:text-blue-700">
              Home
            </Link>
          </li>

          <li>
            <Link to="/books" className="transition-all duration-300 hover:text-blue-700">
              Books
            </Link>
          </li>

          <li>
            <Link to="/about" className="transition-all duration-300 hover:text-blue-700">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="transition-all duration-300 hover:text-blue-700">
              Contact
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <Link
            to="/login"
            className="px-5 py-2 border border-blue-700 rounded-full text-blue-700 hover:bg-blue-700 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 bg-blue-700 rounded-full text-white hover:bg-blue-800 transition"
          >
            Register
          </Link>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;