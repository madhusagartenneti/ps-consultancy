import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaArrowRight,
  FaUserTie,
  FaClock,
} from "react-icons/fa";

export default function JobUpdates() {
  const jobs = [
    {
      title: "Data Entry Executive",
      company: "Private Company",
      location: "Hyderabad",
      salary: "₹15,000 - ₹20,000",
      experience: "0-1 Years",
      type: "Full Time",
    },
    {
      title: "HR Recruiter",
      company: "IT Recruitment Firm",
      location: "Hyderabad",
      salary: "₹18,000 - ₹25,000",
      experience: "1-3 Years",
      type: "Full Time",
    },
    {
      title: "Accountant",
      company: "Manufacturing Company",
      location: "Visakhapatnam",
      salary: "₹20,000 - ₹30,000",
      experience: "2-5 Years",
      type: "Full Time",
    },
    {
      title: "Administrative Assistant",
      company: "Corporate Office",
      location: "Bangalore",
      salary: "₹18,000 - ₹28,000",
      experience: "1-2 Years",
      type: "Full Time",
    },
  ];

  return (
    <section
      id="jobs"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm md:text-base">
            Latest Job Openings
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-5">
            Job Updates
          </h2>

          <p className="text-slate-600 text-base md:text-lg mt-4 max-w-3xl mx-auto">
            Explore the latest job opportunities available through
            PS Consultancy and apply today.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-5">
                <FaBriefcase />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                {job.title}
              </h3>

              <p className="text-blue-600 font-semibold mt-2 text-sm md:text-base">
                {job.company}
              </p>

              {/* Details */}
              <div className="mt-5 space-y-4 flex-1">
                <div className="flex items-center gap-3 text-slate-600 text-sm md:text-base">
                  <FaMapMarkerAlt className="text-red-500 flex-shrink-0" />
                  <span>{job.location}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-600 text-sm md:text-base">
                  <FaMoneyBillWave className="text-green-500 flex-shrink-0" />
                  <span>{job.salary}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-600 text-sm md:text-base">
                  <FaUserTie className="text-blue-500 flex-shrink-0" />
                  <span>{job.experience}</span>
                </div>

                <div className="flex items-center gap-3 text-slate-600 text-sm md:text-base">
                  <FaClock className="text-orange-500 flex-shrink-0" />
                  <span>{job.type}</span>
                </div>
              </div>

              {/* Button */}
              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all duration-300">
                Apply Now
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}