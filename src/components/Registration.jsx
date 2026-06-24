import { useState } from "react";
import {
  FaUserPlus,
  FaMoneyBillWave,
  FaFileAlt,
  FaUserTie,
  FaCheckCircle,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyzlShq1sL2MuxaTDpsY39vyd6zbNokAXC2GAaMN9rpZ_ZrVoTRGuJILPCOZX3GP8S2/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );

    const data = await response.text();

    console.log(data);

    alert("Registration Submitted Successfully!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      qualification: "",
    });
  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  }
};

  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Register with PS Consultancy",
      desc: "Complete your registration process by providing your details.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Pay Registration Fee",
      desc: "Registration Fee: ₹1,000 (Non-Refundable).",
    },
    {
      icon: <FaFileAlt />,
      title: "Submit Resume & Documents",
      desc: "Provide your updated resume and required documents.",
    },
    {
      icon: <FaUserTie />,
      title: "Attend Interviews",
      desc: "Our team will schedule interviews with suitable companies.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Get Placed",
      desc: "Receive job offers and begin your professional journey.",
    },
  ];

  return (
    <section
      id="register"
      className="py-24 bg-gradient-to-b from-slate-50 to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
            Registration Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6">
            Start Your Career Journey
          </h2>

          <p className="text-slate-600 text-lg mt-4 max-w-3xl mx-auto">
            Follow these simple steps to register with PS Consultancy and
            unlock exciting career opportunities.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center"
            >
              {/* Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 mx-auto bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mt-6 mb-6">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>

              <p className="text-slate-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Registration Fee */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-3xl shadow-2xl text-center">
          <h3 className="text-3xl font-bold">
            Registration Fee: ₹1,000
          </h3>

          <p className="mt-3 text-red-100 text-lg">
            The registration fee is non-refundable and required to process
            your profile and job applications.
          </p>
        </div>

        {/* Registration Form */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
                Candidate Registration
              </span>

              <h3 className="text-4xl font-bold text-slate-900 mt-5">
                Register Now
              </h3>

              <p className="text-slate-500 mt-3">
                Fill in your details and begin your journey with
                PS Consultancy.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Name */}
              <div className="relative">
                <FaUser className="absolute top-5 left-4 text-slate-400" />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full border border-slate-300 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <FaPhoneAlt className="absolute top-5 left-4 text-slate-400" />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                  className="w-full border border-slate-300 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute top-5 left-4 text-slate-400" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full border border-slate-300 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Qualification */}
              <div className="relative">
                <FaGraduationCap className="absolute top-5 left-4 text-slate-400" />

                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="Qualification"
                  required
                  className="w-full border border-slate-300 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-[1.02] transition duration-300"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}