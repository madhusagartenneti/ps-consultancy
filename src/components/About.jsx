import {
  FaBriefcase,
  FaUsers,
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";

export default function About() {
  const aboutImg =
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop";

  const features = [
    "Permanent & Contract Recruitment Solutions",
    "Resume Screening & Career Guidance",
    "Opportunities for Freshers & Experienced Candidates",
    "Interview Preparation & Placement Support",
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-slate-50 to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="PS Consultancy"
              className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-8 left-8 bg-white p-6 rounded-3xl shadow-2xl">
              <h3 className="text-5xl font-bold text-blue-600">
                7+
              </h3>

              <p className="text-slate-500">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
              About PS Consultancy
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-6 leading-tight">
              Connecting Talent with
              <span className="text-blue-600 block">
                Great Opportunities
              </span>
            </h2>

            <p className="text-slate-600 mt-6 text-lg leading-relaxed">
              PS Consultancy is a trusted recruitment partner helping
              job seekers find rewarding career opportunities and
              assisting companies in hiring the right talent.
              We provide recruitment solutions, career guidance,
              interview preparation, and placement support for both
              freshers and experienced professionals.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-5">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <FaCheckCircle className="text-green-500 text-xl" />

                  <p className="text-slate-700 font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
              <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
                <FaUsers className="text-blue-600 text-3xl mx-auto mb-3" />

                <h3 className="text-3xl font-bold text-slate-900">
                  10K+
                </h3>

                <p className="text-slate-500 text-sm">
                  Candidates
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
                <FaBriefcase className="text-blue-600 text-3xl mx-auto mb-3" />

                <h3 className="text-3xl font-bold text-slate-900">
                  500+
                </h3>

                <p className="text-slate-500 text-sm">
                  Companies
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg text-center">
                <FaAward className="text-blue-600 text-3xl mx-auto mb-3" />

                <h3 className="text-3xl font-bold text-slate-900">
                  7+
                </h3>

                <p className="text-slate-500 text-sm">
                  Years Trusted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}