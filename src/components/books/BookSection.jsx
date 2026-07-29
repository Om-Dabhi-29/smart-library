function BookSection() {
  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert C. Martin",
      image: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
      image: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg",
    },
    {
      id: 4,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      image: "https://covers.openlibrary.org/b/isbn/9781612681139-L.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Popular Books
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Discover the most loved books in our library.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-5">

                <h3 className="text-xl font-bold">
                  {book.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {book.author}
                </p>

                <button className="mt-5 w-full bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800 transition">
                  Borrow Now
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default BookSection;