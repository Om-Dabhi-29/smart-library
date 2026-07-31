import { useParams } from "react-router-dom";
import books from "../../data/books";

function BookDetails() {
  const { id } = useParams();

  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return <h1 className="text-center mt-10">Book not found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={book.image}
          alt={book.title}
          className="w-full rounded-xl shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold">{book.title}</h1>

          <p className="mt-4 text-gray-600">
            Author: {book.author}
          </p>

          <p className="mt-2">
            Category: {book.category}
          </p>

          <p className="mt-2">
            Rating: ⭐ {book.rating}
          </p>

          <p className="mt-2">
            Status: {book.available ? "Available" : "Not Available"}
          </p>

         <button
  disabled={!book.available}
  className={`mt-8 px-6 py-3 rounded-lg text-white ${
    book.available
      ? "bg-blue-600 hover:bg-blue-700"
      : "bg-gray-400 cursor-not-allowed"
  }`}
>
  {book.available ? "Borrow Book" : "Unavailable"}
</button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;