import {
  FaFileContract,
  FaMoneyBillWave,
  FaBriefcase,
  FaShieldAlt,
  FaGavel,
  FaCheckCircle,
  FaDownload,
} from "react-icons/fa";

export default function TermsAndConditions() {
  const terms = [
    {
      icon: <FaMoneyBillWave />,
      title: "Registration Fee",
      desc: "₹1,000 registration fee is mandatory for all candidates.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Non-Refundable Fee",
      desc: "The registration fee is strictly non-refundable under any circumstances.",
    },
    {
      icon: <FaBriefcase />,
      title: "Consultancy Charges",
      desc: "After successful placement, candidates must pay one month's salary as consultancy charges.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Payment Timeline",
      desc: "Consultancy charges must be paid within 7 days from the date of joining.",
    },
    {
      icon: <FaFileContract />,
      title: "No Job Guarantee",
      desc: "PS Consultancy does not guarantee job placement.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Employer Policies",
      desc: "PS Consultancy is not responsible for employer decisions, salary revisions, transfers, or termination.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Valid Information",
      desc: "Candidates must provide genuine information and valid documents.",
    },
    {
      icon: <FaShieldAlt />,
      title: "False Information",
      desc: "Any false information may result in cancellation of services without refund.",
    },
    {
      icon: <FaGavel />,
      title: "Jurisdiction",
      desc: "All disputes and legal matters are subject to local jurisdiction only.",
    },
  ];

  return (
    <section
      id="terms"
      className="relative py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 px-5 py-2 rounded-full font-semibold">
            Terms & Conditions
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            PS Consultancy
            <span className="block text-blue-400 mt-2">
              Terms & Conditions
            </span>
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto mt-5 text-lg">
            Please read these terms carefully before registering with
            PS Consultancy.
          </p>

          {/* Download Button */}
          <a
            href="/Terms-and-Conditions.pdf"
            download
            className="inline-flex items-center gap-3 mt-8 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold px-8 py-4 rounded-2xl transition shadow-xl"
          >
            <FaDownload />
            Download Terms & Conditions
          </a>
        </div>

        {/* Terms Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {terms.map((term, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/15 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500 text-white flex items-center justify-center text-2xl mb-5">
                {term.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {term.title}
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {term.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Declaration */}
        <div className="mt-16 bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">
            Candidate Declaration
          </h3>

          <p className="text-slate-300 leading-relaxed max-w-4xl mx-auto">
            By registering with <strong>PS Consultancy</strong> and paying
            the registration fee, the candidate confirms that they have
            read, understood, and agreed to all the above Terms &
            Conditions.
          </p>
        </div>
      </div>
    </section>
  );
}