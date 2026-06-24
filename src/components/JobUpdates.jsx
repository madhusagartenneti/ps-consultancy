import { useState, useEffect } from "react";
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
} from "react-icons/fa";

export default function JobUpdates() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [jobs, setJobs] = useState([]);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    experience: "",
    location: "",
    additionalInfo: "",
  });

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbyQ4t8A1SujGz2956X5_pfmLb5YeKrKu4BOIxDW7iXYQhkU_wwTua822ONQ-T5k4yzQqQ/exec"
    )
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleApply = (jobTitle) => {
    setSelectedJob(jobTitle);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      qualification: "",
      experience: "",
      location: "",
      additionalInfo: "",
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  // ఫామ్ డేటాను గూగుల్ స్క్రిప్ట్ కి అర్థమయ్యేలా మార్చడం
  const formDataBody = new URLSearchParams();
  formDataBody.append("jobTitle", selectedJob);
  formDataBody.append("name", formData.name);
  formDataBody.append("phone", formData.phone);
  formDataBody.append("email", formData.email);
  formDataBody.append("qualification", formData.qualification);
  formDataBody.append("experience", formData.experience);
  formDataBody.append("location", formData.location);
  formDataBody.append("additionalInfo", formData.additionalInfo);

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbxK6yKCBB2LATFWkk0_ggrfOb2gGCnFJU1caxqG-9-w4oHoDEFufacWHJHRGA9vUykh/exec",
      {
        method: "POST",
        // mode: "no-cors", 
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataBody.toString(),
      }
    );

    alert("Application Submitted Successfully!");
    closePopup();
  } catch (error) {
    console.error("Submission Error:", error);
    alert("Submission Failed!");
  } finally {
    setLoading(false);
  }
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
              Explore the latest job opportunities available through PS Consultancy and apply today.
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
              onClick={closePopup}
              className="absolute top-5 right-5 text-2xl text-gray-500 hover:text-red-500 transition-colors"
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
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
              <div className="relative">
                <FaUser className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500"
                />
              </div>

              <div className="relative">
                <FaPhoneAlt className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500"
                />
              </div>

              <div className="relative">
                <FaGraduationCap className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="Qualification"
                  required
                  className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500"
                />
              </div>

              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Experience"
                className="w-full border rounded-xl py-3 px-4 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Current Location"
                className="w-full border rounded-xl py-3 px-4 outline-none focus:border-blue-500"
              />

              <textarea
                rows="4"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Additional Information"
                className="md:col-span-2 border rounded-xl p-4 outline-none focus:border-blue-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}