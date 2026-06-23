import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              PS Consultancy
            </h2>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Connecting Talent with Opportunity. We help job seekers find
              rewarding careers and assist companies in hiring the right
              talent.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://wa.me/918074291374"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.linkedin.com/in/ps-consultancy-04b0a7258"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-slate-300">
              <a href="#about" className="hover:text-blue-400 transition">
                About Us
              </a>

              <a
                href="#services"
                className="hover:text-blue-400 transition"
              >
                Services
              </a>

              <a
                href="#register"
                className="hover:text-blue-400 transition"
              >
                Registration
              </a>

              <a
                href="#reviews"
                className="hover:text-blue-400 transition"
              >
                Reviews
              </a>

              <a
                href="#contact"
                className="hover:text-blue-400 transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">
              Our Services
            </h3>

            <div className="flex flex-col gap-3 text-slate-300">
              <p>✔ Job Placement Assistance</p>
              <p>✔ Resume Screening</p>
              <p>✔ Interview Preparation</p>
              <p>✔ Career Counseling</p>
              <p>✔ Permanent Staffing</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">
              Contact Info
            </h3>

            <div className="space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400" />
                <span>+91 8074291374</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <span>psconsultancy98@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1" />
                <span>
                  Hyderabad,
                  <br />
                  Telangana, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-blue-400 font-semibold">
              PS Consultancy
            </span>
            . All Rights Reserved.
          </p>

          <a
            href="#"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-full text-white transition"
          >
            <FaArrowUp />
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}