import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Computer Science Student",
      review:
        "The Smart Library makes borrowing books simple and fast. I can find everything I need in minutes.",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Engineering Student",
      review:
        "A clean interface and powerful search. It has completely changed how I use the college library.",
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Library Staff",
      review:
        "Managing books and tracking issued books has become much easier with this system.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          What Our Users Say
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Trusted by students and librarians.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="flex text-yellow-500 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;