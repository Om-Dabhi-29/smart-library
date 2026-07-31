import { useState } from "react";
import SearchBar from "../../components/books/SearchBar";
import BookGrid from "../../components/books/BookGrid";
import books from "../../data/books";
import CategoryFilter from "../../components/books/CategoryFilter";
import SortBooks from "../../components/books/SortBooks";
import Pagination from "../../components/books/Pagination";

function Books() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
const [category, setCategory] = useState("All");
const [currentPage, setCurrentPage] = useState(1);

const booksPerPage = 4;
  const filteredBooks = books.filter((book) => {
  const matchesSearch = book.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "All" || book.category === category;

  return matchesSearch && matchesCategory;
});
const sortedBooks = [...filteredBooks];

if (sortBy === "title") {
  sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
}

if (sortBy === "rating") {
  sortedBooks.sort((a, b) => b.rating - a.rating);
}
const lastBook = currentPage * booksPerPage;
const firstBook = lastBook - booksPerPage;

const currentBooks = sortedBooks.slice(firstBook, lastBook);

const totalPages = Math.ceil(
  sortedBooks.length / booksPerPage
);

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-3">
        Library Books
      </h1>

      <p className="text-gray-600 mb-6">
        Browse all books available in the Smart Library.
      </p>

      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter category={category}  setCategory={setCategory} />
      <SortBooks
  sortBy={sortBy}
  setSortBy={setSortBy}
/>
<BookGrid books={currentBooks} />

<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  setCurrentPage={setCurrentPage}
/>
    </div>
  );
}

export default Books;