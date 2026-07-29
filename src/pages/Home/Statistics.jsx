import { FaBook, FaUsers, FaUniversity, FaAward } from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      icon: <FaBook className="text-4xl text-blue-700" />,
      number: "10,000+",
      title: "Books",
    },
    {
      icon: <FaUsers className="text-4xl text-blue-700" />,
      number: "2,500+",
      title: "Students",
    },
    {
      icon: <FaUniversity className="text-4xl text-blue-700" />,
      number: "150+",
      title: "Libraries",
    },
    {
      icon: <FaAward className="text-4xl text-blue-700" />,
      number: "98%",
      title: "Satisfaction",
    },
  ];

  return (
    <section className="bg-blue-700 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Smart Library in Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>

              <h3 className="text-3xl font-bold text-gray-900">
                {stat.number}
              </h3>

              <p className="mt-2 text-gray-600">
                {stat.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;