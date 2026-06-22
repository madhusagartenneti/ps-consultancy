import {
  FaUserTie,
  FaBriefcase,
  FaFileAlt,
  FaChalkboardTeacher,
  FaUsers,
  FaBuilding,
  FaUserCheck,
  FaHandshake,
} from "react-icons/fa";

export default function Services() {
  const jobSeekerServices = [
    {
      icon: <FaBriefcase />,
      title: "Job Placement Assistance",
    },
    {
      icon: <FaFileAlt />,
      title: "Resume Screening",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Interview Preparation",
    },
    {
      icon: <FaUsers />,
      title: "Career Counseling",
    },
  ];

  const employerServices = [
    {
      icon: <FaBuilding />,
      title: "Bulk Hiring",
    },
    {
      icon: <FaUserCheck />,
      title: "Candidate Screening",
    },
    {
      icon: <FaHandshake />,
      title: "Executive Hiring",
    },
    {
      icon: <FaBriefcase />,
      title: "Permanent Staffing",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-slate-50 to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
            Our Services
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-5">
            Recruitment Solutions for Everyone
          </h2>

          <p className="text-slate-500 text-lg mt-4 max-w-3xl mx-auto">
            At PS Consultancy, we provide professional recruitment services
            for both job seekers and employers, helping create successful
            career opportunities and business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Job Seekers */}
          <div className="bg-white rounded-[35px] p-10 shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-3xl">
                <FaUserTie />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  For Job Seekers
                </h3>

                <p className="text-slate-500">
                  Build your career with expert guidance.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {jobSeekerServices.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition"
                >
                  <div className="text-blue-600 text-3xl mb-4">
                    {item.icon}
                  </div>

                  <h4 className="font-semibold text-slate-800">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Employers */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-[35px] p-10 shadow-xl text-white hover:-translate-y-2 transition duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">
                <FaBuilding />
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  For Employers
                </h3>

                <p className="text-slate-300">
                  Hire the right talent for your company.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {employerServices.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition"
                >
                  <div className="text-yellow-400 text-3xl mb-4">
                    {item.icon}
                  </div>

                  <h4 className="font-semibold">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-4xl font-bold text-blue-700">
              7+
            </h3>
            <p className="text-slate-500 mt-2">
              Years of Experience
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-4xl font-bold text-blue-700">
              1000+
            </h3>
            <p className="text-slate-500 mt-2">
              Candidates Placed
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-4xl font-bold text-blue-700">
              100+
            </h3>
            <p className="text-slate-500 mt-2">
              Hiring Companies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}