import { useState } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Registration", href: "#register" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3">
      <nav className="max-w-7xl mx-auto bg-white/90 backdrop-blur-xl border border-slate-200 rounded-2xl lg:rounded-full px-4 py-3 shadow-xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 min-w-0">
            <img
              src={logo}
              alt="PS Consultancy Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
            />

            <div className="min-w-0">
              <h1 className="text-sm sm:text-lg font-bold text-slate-900 truncate">
                PS Consultancy
              </h1>

              <p className="hidden sm:block text-xs text-slate-500 truncate">
                7 Years Trusted Recruitment Partner
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2 bg-slate-100 rounded-full p-2">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-5 py-2 rounded-full text-slate-700 font-medium hover:bg-white hover:text-blue-600 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Call Button */}
          <a
            href="tel:+918074291374"
            className="hidden lg:flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition"
          >
            <FaPhoneAlt />
            Call Us
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl text-slate-800"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-4 border-t pt-4">
            <div className="flex flex-col gap-3">
              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-slate-700 font-medium hover:text-blue-600"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="tel:+918074291374"
                className="bg-blue-600 text-white text-center py-3 rounded-xl mt-2"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}