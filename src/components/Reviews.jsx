import {
  FaStar,
  FaQuoteLeft,
  FaUserCircle,
} from "react-icons/fa";

export default function Reviews() {
  const reviews = [
    {
      name: "Rahul Kumar",
      role: "Software Developer",
      text: "Got a job in just 2 weeks. The PS Consultancy team guided me throughout the entire process and helped me crack my interview.",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      role: "HR Executive",
      text: "Excellent support for freshers. They improved my resume and prepared me for interviews. Highly recommended consultancy.",
      rating: 5,
    },
    {
      name: "Vikram Patel",
      role: "Accountant",
      text: "Very genuine consultancy with regular updates and professional staff. I received multiple interview opportunities.",
      rating: 5,
    },
  ];

  return (
    <section
      id="reviews"
      className="py-24 bg-gradient-to-b from-slate-50 to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
            ⭐ Testimonials
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-5">
            What Our Candidates Say
          </h2>

          <p className="text-slate-500 text-lg mt-4 max-w-3xl mx-auto">
            Real experiences from candidates who trusted PS Consultancy
            for their career journey.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative"
            >
              {/* Quote */}
              <div className="absolute top-6 right-6 text-blue-100 text-5xl">
                <FaQuoteLeft />
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 text-lg mb-5">
                {Array.from(
                  { length: review.rating },
                  (_, i) => (
                    <FaStar key={i} />
                  )
                )}
              </div>

              {/* Review */}
              <p className="text-slate-600 leading-relaxed mb-8">
                "{review.text}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-3xl">
                  <FaUserCircle />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    {review.name}
                  </h4>

                  <p className="text-slate-500 text-sm">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-4xl font-bold text-blue-700">
              1000+
            </h3>
            <p className="text-slate-500 mt-2">
              Candidates Placed
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-4xl font-bold text-blue-700">
              4.9★
            </h3>
            <p className="text-slate-500 mt-2">
              Average Rating
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-4xl font-bold text-blue-700">
              7+
            </h3>
            <p className="text-slate-500 mt-2">
              Years of Trust
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}