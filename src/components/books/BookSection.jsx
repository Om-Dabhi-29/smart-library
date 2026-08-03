import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import books from "../../data/books";

function BookSection() {
  const featuredBooks = books.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-center justify-between mb-12">

          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Featured Books
            </h2>

            <p className="mt-3 text-gray-600">
              Discover our most popular books.
            </p>
          </div>

          <Link
            to="/books"
            className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
          >
            View All
          </Link>

        </div>

        {/* Books */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {featuredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default BookSection;