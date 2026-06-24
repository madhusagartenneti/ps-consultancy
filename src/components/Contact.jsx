import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-yellow-400/20 text-yellow-300 px-5 py-2 rounded-full font-semibold">
            Contact Us
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">
            Let's Connect
          </h2>

          <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">
            Have questions about jobs or hiring? Get in touch with
            PS Consultancy and our team will assist you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl text-center border border-white/10 hover:bg-white/20 transition">
            <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-2xl flex items-center justify-center text-blue-950 text-2xl mb-5">
              <FaPhoneAlt />
            </div>

            <h3 className="text-white text-xl font-bold">
              Call Us
            </h3>

            <a
              href="tel:+918074291374"
              className="text-slate-300 mt-3 block hover:text-yellow-300"
            >
              +91 80742 91374
            </a>
          </div>

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl text-center border border-white/10 hover:bg-white/20 transition">
            <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-2xl flex items-center justify-center text-blue-950 text-2xl mb-5">
              <FaEnvelope />
            </div>

            <h3 className="text-white text-xl font-bold">
              Email Us
            </h3>

            <a
              href="mailto:psconsultancy@gmail.com"
              className="text-slate-300 mt-3 block hover:text-yellow-300 break-all"
            >
              psconsultancy98@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl text-center border border-white/10 hover:bg-white/20 transition">
            <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-2xl flex items-center justify-center text-blue-950 text-2xl mb-5">
              <FaLinkedin />
            </div>

            <h3 className="text-white text-xl font-bold">
              LinkedIn
            </h3>

            <a
              href="https://www.linkedin.com/in/ps-consultancy-04b0a7258"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 mt-3 block hover:text-yellow-300"
            >
              Follow Us
            </a>
          </div>

          {/* Location */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl text-center border border-white/10 hover:bg-white/20 transition">
            <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-2xl flex items-center justify-center text-blue-950 text-2xl mb-5">
              <FaMapMarkerAlt />
            </div>

            <h3 className="text-white text-xl font-bold">
              Location
            </h3>

            <p className="text-slate-300 mt-3">
              Telangana, India
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-16">
          <a
            href="tel:+918074291374"
            className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-bold px-8 py-4 rounded-2xl transition text-center"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/918074291374"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl transition flex items-center justify-center gap-3"
          >
            <FaWhatsapp />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}