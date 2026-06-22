import { useState, useEffect } from "react";
import {
  FaBriefcase,
  FaUsers,
  FaUserTie,
  FaArrowRight,
} from "react-icons/fa";
import backgroundImage from "../assets/backg.png";

export default function Hero() {
  const heroImages = [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (prev) => (prev + 1) % heroImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 px-5 py-2 rounded-full text-blue-200 font-medium">
              🚀 Trusted Recruitment Partner Since 2018
            </span>

            <h1 className="text-5xl md:text-7xl font-black text-white mt-8 leading-tight">
              Connecting
              <span className="block text-blue-400">
                Talent with
              </span>
              Opportunity
            </h1>

            <p className="text-slate-300 text-lg mt-8 leading-relaxed max-w-2xl">
              At{" "}
              <span className="font-bold text-white">
                PS Consultancy
              </span>
              , we help job seekers discover rewarding career opportunities and
              assist companies in finding the right talent through professional
              recruitment solutions and career guidance.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="#register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition"
              >
                Register Now
                <FaArrowRight />
              </a>

              <a
                href="#contact"
                className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition"
              >
                Contact Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-14">
              <div className="bg-white/10 backdrop-blur-xl p-5 rounded-3xl text-center border border-white/10">
                <FaUsers className="text-blue-400 text-3xl mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-white">
                  10K+
                </h3>
                <p className="text-slate-300 text-sm">
                  Job Seekers
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl p-5 rounded-3xl text-center border border-white/10">
                <FaBriefcase className="text-blue-400 text-3xl mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-white">
                  500+
                </h3>
                <p className="text-slate-300 text-sm">
                  Companies
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl p-5 rounded-3xl text-center border border-white/10">
                <FaUserTie className="text-blue-400 text-3xl mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-white">
                  7+
                </h3>
                <p className="text-slate-300 text-sm">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE UNIQUE IMAGE SECTION */}
          <div className="hidden lg:flex justify-center relative">
            {/* Floating Card 1 */}
            <div className="absolute -left-8 top-20 bg-white/10 backdrop-blur-xl p-5 rounded-3xl border border-white/20 shadow-2xl z-20">
              <h3 className="text-3xl font-bold text-white">
                10K+
              </h3>
              <p className="text-slate-300 text-sm">
                Happy Candidates
              </p>
            </div>

            {/* Main Image */}
            <div className="relative">
              <img
                src={heroImages[currentImage]}
                alt="PS Consultancy"
                className="w-[450px] h-[550px] object-cover rounded-[40px] border-4 border-white/20 shadow-2xl transition-all duration-1000"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent rounded-[40px]"></div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -right-8 bottom-20 bg-white/10 backdrop-blur-xl p-5 rounded-3xl border border-white/20 shadow-2xl z-20">
              <h3 className="text-3xl font-bold text-green-400">
                500+
              </h3>
              <p className="text-slate-300 text-sm">
                Hiring Companies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}