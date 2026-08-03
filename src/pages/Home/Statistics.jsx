import { FaBook, FaUsers, FaExchangeAlt, FaStar } from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      icon: <FaBook />,
      number: "10,000+",
      title: "Books Available",
    },
    {
      icon: <FaUsers />,
      number: "5,000+",
      title: "Active Students",
    },
    {
      icon: <FaExchangeAlt />,
      number: "2,500+",
      title: "Books Borrowed",
    },
    {
      icon: <FaStar />,
      number: "4.9/5",
      title: "User Rating",
    },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Smart Library in Numbers
          </h2>

          <p className="mt-4 text-gray-600">
            Trusted by thousands of students every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl text-blue-700 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold text-gray-900">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Statistics;