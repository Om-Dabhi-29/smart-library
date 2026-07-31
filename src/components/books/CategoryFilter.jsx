function CategoryFilter({ category, setCategory }) {
  const categories = [
    "All",
    "Programming",
    "Self Help",
    "Novel",
    "Finance",
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`px-4 py-2 rounded-lg border ${
            category === item
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;