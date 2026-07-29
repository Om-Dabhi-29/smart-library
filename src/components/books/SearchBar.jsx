function SearchBar() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <input
        type="text"
        placeholder="Search books..."
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
}

export default SearchBar;