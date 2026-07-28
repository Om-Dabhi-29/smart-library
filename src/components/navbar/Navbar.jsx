import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Smart Library
      </h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>

        <Link to="/books">Books</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;