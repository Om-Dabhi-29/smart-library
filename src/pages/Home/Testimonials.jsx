import { FaStar } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Computer Science Student",
      review:
        "Smart Library helped me find books for my semester in just a few minutes.",
    },
    {
      name: "Priya Patel",
      role: "Engineering Student",
      review:
        "The interface is simple, fast and makes borrowing books much easier.",
    },
    {
      name: "Amit Verma",
      role: "Library Member",
      review:
        "I love the search feature and the clean design. It saves a lot of time.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-gray-900">
            What Our Users Say
          </h2>

          <p className="mt-4 text-gray-600">
            Trusted by students and readers every day.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300"
            >

              <div className="flex mb-4 text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 leading-7">
                "{review.review}"
              </p>

              <div className="mt-6 flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {review.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {review.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;