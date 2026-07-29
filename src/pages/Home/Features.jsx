import { FaBook, FaSearch, FaUserGraduate, FaShieldAlt } from "react-icons/fa";

function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Why Choose Smart Library?
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Everything you need to manage books and reading in one place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">

            <FaBook className="text-5xl text-blue-700 mb-5" />

            <h3 className="text-2xl font-semibold mb-3">
              Thousands of Books
            </h3>

            <p className="text-gray-600">
              Browse and manage a huge collection of books.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">

            <FaSearch className="text-5xl text-blue-700 mb-5" />

            <h3 className="text-2xl font-semibold mb-3">
              Fast Search
            </h3>

            <p className="text-gray-600">
              Find books instantly using smart search.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">

            <FaUserGraduate className="text-5xl text-blue-700 mb-5" />

            <h3 className="text-2xl font-semibold mb-3">
              Student Friendly
            </h3>

            <p className="text-gray-600">
              Easy borrowing and returning for students.
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">

            <FaShieldAlt className="text-5xl text-blue-700 mb-5" />

            <h3 className="text-2xl font-semibold mb-3">
              Secure System
            </h3>

            <p className="text-gray-600">
              Safe account and library management.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Features;