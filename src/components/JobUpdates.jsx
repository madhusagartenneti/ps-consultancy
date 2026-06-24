import { useState } from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaArrowRight,
  FaUserTie,
  FaClock,
  FaTimes,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaGraduationCap,
  FaFileUpload,
} from "react-icons/fa";

export default function JobUpdates() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

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

  const handleApply = (jobTitle) => {
    setSelectedJob(jobTitle);
    setShowPopup(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Application Submitted Successfully for ${selectedJob}!`
    );

    setShowPopup(false);
  };

  return (
    <>
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
                  <div className="flex items-center gap-3 text-slate-600">
                    <FaMapMarkerAlt className="text-red-500" />
                    <span>{job.location}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <FaMoneyBillWave className="text-green-500" />
                    <span>{job.salary}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <FaUserTie className="text-blue-500" />
                    <span>{job.experience}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <FaClock className="text-orange-500" />
                    <span>{job.type}</span>
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => handleApply(job.title)}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Apply Now
                  <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">

            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-5 right-5 text-2xl text-gray-500 hover:text-red-500"
            >
              <FaTimes />
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900">
                Apply For Job
              </h2>

              <p className="text-blue-600 font-semibold mt-2">
                Position: {selectedJob}
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-5"
            >
              <div className="relative">
                <FaUser className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full border rounded-xl py-3 pl-12 pr-4"
                />
              </div>

              <div className="relative">
                <FaPhoneAlt className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full border rounded-xl py-3 pl-12 pr-4"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full border rounded-xl py-3 pl-12 pr-4"
                />
              </div>

              <div className="relative">
                <FaGraduationCap className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Qualification"
                  required
                  className="w-full border rounded-xl py-3 pl-12 pr-4"
                />
              </div>

              <input
                type="text"
                placeholder="Experience"
                className="w-full border rounded-xl py-3 px-4"
              />

              <input
                type="text"
                placeholder="Current Location"
                className="w-full border rounded-xl py-3 px-4"
              />

              <div className="md:col-span-2">
                <label className="flex items-center gap-2 font-medium mb-2">
                  <FaFileUpload />
                  Upload Resume
                </label>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full border rounded-xl p-3"
                />
              </div>

              <textarea
                rows="4"
                placeholder="Additional Information"
                className="md:col-span-2 border rounded-xl p-4"
              />

              <button
                type="submit"
                className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
