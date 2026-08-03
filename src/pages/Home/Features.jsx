import {
  FaBookOpen,
  FaSearch,
  FaUsers,
  FaMobileAlt,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaBookOpen size={35} />,
      title: "10,000+ Books",
      description:
        "Explore thousands of books across programming, business, science and more.",
    },
    {
      icon: <FaSearch size={35} />,
      title: "Smart Search",
      description:
        "Find books instantly by title, author, category or keywords.",
    },
    {
      icon: <FaUsers size={35} />,
      title: "Student Friendly",
      description:
        "Easy borrowing, returning and reservation system for every student.",
    },
    {
      icon: <FaMobileAlt size={35} />,
      title: "Access Anywhere",
      description:
        "Use Smart Library on desktop, tablet and mobile devices.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Smart Library?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Everything you need to discover, borrow and manage books in one place.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;