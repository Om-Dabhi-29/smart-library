function SortBooks({ sortBy, setSortBy }) {
  return (
    <div className="mb-6">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="rounded-lg border border-gray-300 px-4 py-2"
      >
        <option value="default">Sort By</option>
        <option value="title">Title (A-Z)</option>
        <option value="rating">Highest Rating</option>
      </select>
    </div>
  );
}

export default SortBooks;