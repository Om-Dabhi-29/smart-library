import  { Link } from "react-router-dom";
function BookCard({ book }) {
  return (
    <div className="rounded-xl border p-4 shadow-sm hover:shadow-md transition">
      <img
        src={book.image}
        alt={book.title}
        className="h-56 w-full rounded-lg object-cover"
      />

      <h2 className="mt-4 text-xl font-semibold">{book.title}</h2>

      <p className="text-gray-600">Author: {book.author}</p>

      <p className="text-gray-600">Category: {book.category}</p>

      <p className="text-yellow-600">⭐ {book.rating}</p>

      <p className={book.available ? "text-green-600" : "text-red-600"}>
        {book.available ? "Available" : "Not Available"}
      </p>
<Link
  to={`/books/${book.id}`}
  className="mt-4 block w-full rounded-lg bg-blue-600 py-2 text-center text-white hover:bg-blue-700"
>
  View Details
</Link>
    </div>
  );
}

export default BookCard;