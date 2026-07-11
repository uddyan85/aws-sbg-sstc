"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Send, ArrowLeft, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa6";

// ----------------------------------------------------------------------
// Organizer data – update this array with your actual organizers
// ----------------------------------------------------------------------
const organizers = [
  {
    id: 1,
    name: "Uddyan Sahu",
    title: "Organizer - AWS SBG Leader, SSTC",
    image: "/uddyan.png", 
    linkedin: "https://www.linkedin.com/in/uddyan-sahu/",
    // instagram: "https://instagram.com/uddyan.sahu",
    email: "uddyansahu7@gmail.com",
  },
  // Add more organizers here if needed
];

export default function Contact() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    reason: "",
    message: "",
  });

  const totalSteps = 5;
  const inputRefs = useRef<(HTMLInputElement | HTMLSelectElement | null)[]>([]);

  useEffect(() => {
    if (!isConnectOpen && inputRefs.current[step]) {
      setTimeout(() => {
        inputRefs.current[step]?.focus();
      }, 400);
    }
  }, [step, isConnectOpen]);

  const handleNext = () => {
    if (step < totalSteps - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isStepValid = () => {
    if (step === 0) return formData.name.trim().length > 0;
    if (step === 1) return formData.email.trim().length > 0 && formData.email.includes("@");
    if (step === 2) return formData.role.trim().length > 0;
    if (step === 3) return formData.reason.length > 0;
    if (step === 4) return formData.message.trim().length > 0;
    return false;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && isStepValid()) {
      e.preventDefault();
      if (step < totalSteps - 1) {
        handleNext();
      } else {
        handleSubmit(e);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", role: "", reason: "", message: "" });
    setStep(0);

    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const inputClasses =
    "w-full text-3xl md:text-5xl font-light bg-transparent border-b border-white/20 focus:border-[#A45AFA] outline-none transition-colors placeholder:text-white/20 pb-4 text-center mt-8";
  const questionClasses = "text-4xl md:text-6xl font-light text-white/90 tracking-wide";

  const renderStepContent = (index: number) => {
    switch (index) {
      case 0:
        return (
          <>
            <h2 className={questionClasses}>Hello SBG, my name is</h2>
            <input
              ref={(el) => { inputRefs.current[0] = el; }}
              name="name"
              value={formData.name}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Type here..."
              className={inputClasses}
            />
          </>
        );
      case 1:
        return (
          <>
            <h2 className={questionClasses}>And my email is</h2>
            <input
              ref={(el) => { inputRefs.current[1] = el; }}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Type here..."
              className={inputClasses}
            />
          </>
        );
      case 2:
        return (
          <>
            <h2 className={questionClasses}>I work as a</h2>
            <input
              ref={(el) => { inputRefs.current[2] = el; }}
              name="role"
              value={formData.role}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="e.g. Developer, Designer..."
              className={inputClasses}
            />
          </>
        );
      case 3:
        return (
          <>
            <h2 className={questionClasses}>I'm reaching out about</h2>
            <select
              ref={(el) => { inputRefs.current[3] = el; }}
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer text-white/90`}
              style={{ textAlignLast: "center" }}
            >
              <option value="" disabled className="bg-[#050816] text-white/50">
                Select an option
              </option>
              <option value="sponsorship" className="bg-[#050816] py-2">
                Sponsorship &amp; Partnership
              </option>
              <option value="speaking" className="bg-[#050816] py-2">
                Speaking or Volunteering
              </option>
              <option value="tickets" className="bg-[#050816] py-2">
                Tickets &amp; Registration
              </option>
              <option value="press" className="bg-[#050816] py-2">
                Press &amp; Media
              </option>
              <option value="community" className="bg-[#050816] py-2">
                Community Partnership
              </option>
              <option value="other" className="bg-[#050816] py-2">
                Other
              </option>
            </select>
          </>
        );
      case 4:
        return (
          <>
            <h2 className={questionClasses}>Here's my message...</h2>
            <input
              ref={(el) => { inputRefs.current[4] = el; }}
              name="message"
              type="text"
              value={formData.message}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Type here..."
              className={inputClasses}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -left-32 top-0 h-[550px] w-[550px] rounded-full bg-[#A45AFA]/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[650px] w-[650px] rounded-full bg-[#A45AFA]/5 blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(164,90,250,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(164,90,250,.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ================= STRICT HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-[9999] p-6 md:p-8 flex justify-between items-center">
        {/* LEFT CONTROLS (Back + Mailto) */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="group relative flex items-center justify-center h-12 w-12 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shrink-0"
            aria-label="Go to main page"
          >
            <span className="absolute inset-0 rounded-full bg-[#A45AFA]/20 blur-md animate-pulse" />
            <span className="absolute inset-0 rounded-full border border-[#A45AFA]/30 group-hover:rotate-45 transition-transform duration-700" />
            <ArrowLeft size={18} className="relative z-10 text-slate-300 group-hover:text-white transition-all duration-300 group-hover:-translate-x-0.5" />
            <span className="absolute left-3 h-5 w-5 rounded-full bg-[#A45AFA] animate-ping opacity-20" />
          </button>

          <a
            className="cm-to text-white/60 font-light tracking-[0.2em] text-sm md:text-base  whitespace-nowrap hover:text-white transition-colors duration-300 cursor-pointer"
            href="mailto:aws.sbg.sstc@gmail.com"
          >
            To: aws.sbg.sstc@gmail.com
          </a>
        </div>

        {/* RIGHT CONTROLS (Connect Panel Trigger - Toggle) */}
        <div>
          <button
            type="button"
            onClick={() => setIsConnectOpen((prev) => !prev)}
            className="group flex items-center justify-center h-12 w-12 md:h-12 md:w-auto md:px-6 rounded-full bg-[#A45AFA] hover:bg-[#8B4CDB] text-white transition-all duration-300 shadow-[0_0_20px_rgba(164,90,250,0.3)] hover:shadow-[0_0_25px_rgba(164,90,250,0.5)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Users size={18} className="shrink-0" />
            <span className="hidden md:block ml-2.5 font-medium text-xs lg:text-sm tracking-widest whitespace-nowrap">
              {isConnectOpen ? "CLOSE" : "CONNECT WITH ORGANIZERS"}
            </span>
          </button>
        </div>
      </header>

      {/* ================= MAIN SLIDER ================= */}
      <main className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-6 pt-10">
        <div className="w-full max-w-3xl overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-full"
            style={{ transform: `translateX(-${step * 100}%)` }}
          >
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 flex flex-col items-center justify-center text-center px-2"
              >
                {renderStepContent(idx)}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-16 h-12">
          {step > 0 && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft size={18} /> Back
            </button>
          )}

          {step < totalSteps - 1 ? (
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#A45AFA] text-white font-semibold tracking-wide disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#8B4CDB] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Next <ChevronRight size={18} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isStepValid() || isSubmitting}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#A45AFA] text-white font-semibold tracking-wide disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#8B4CDB] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={18} />
            </button>
          )}
        </div>

        {/* Status Messages */}
        <div className="h-10 mt-4 flex items-center justify-center">
          {submitStatus === "success" && (
            <p className="text-[#A45AFA] font-medium tracking-wide animate-pulse">
              Message sent successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-400 font-medium tracking-wide animate-pulse">
              Failed to send. Please try again.
            </p>
          )}
        </div>
      </main>

      {/* ================= CONNECT PANEL ================= */}
      <div
        className={`fixed inset-0 z-50 w-full h-full bg-[#050816]/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center ${
          isConnectOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full max-w-7xl h-full p-6 md:p-12 overflow-y-auto pt-24 md:pt-32 flex flex-col">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-12 tracking-wide text-center">
            Connect with an <span className="text-[#A45AFA] italic">Organizer</span>
          </h2>

          {/* Dynamically render organizer cards */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-stretch">
            {organizers.map((org) => (
              <div
                key={org.id}
                className="flex-1 max-w-md mx-auto lg:mx-0 bg-white/[0.02] border border-white/10 p-8 rounded-[2rem] flex flex-col justify-between items-center text-center transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20"
              >
                <div className="flex flex-col items-center gap-6 mb-10">
                  <img
                    src={org.image}
                    alt={org.name}
                    className="h-24 w-24 rounded-full border-2 border-[#A45AFA]/50 object-cover bg-gradient-to-br from-[#A45AFA]/20 to-transparent"
                  />
                  <div>
                    <h3 className="text-2xl font-medium text-white mb-1">
                      {org.name}
                    </h3>
                    <p className="text-xs text-[#A45AFA] uppercase tracking-[0.15em] font-medium">
                      {org.title}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap gap-3 w-full justify-center">
                  <a
                    href={org.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white/5 hover:bg-[#A45AFA] hover:text-white rounded-full text-xs font-medium tracking-wide transition-all duration-300 text-white/70 min-w-[100px] cursor-pointer"
                  >
                    <FaLinkedin size={14} /> LinkedIn
                  </a>
                  {/* <a
                    href={org.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white/5 hover:bg-[#A45AFA] hover:text-white rounded-full text-xs font-medium tracking-wide transition-all duration-300 text-white/70 min-w-[100px] cursor-pointer"
                  >
                    <FaInstagram size={14} /> Instagram
                  </a> */}
                  <a
                    href={`mailto:${org.email}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white/5 hover:bg-[#A45AFA] hover:text-white rounded-full text-xs font-medium tracking-wide transition-all duration-300 text-white/70 min-w-[100px] cursor-pointer"
                  >
                    <FaEnvelope size={14} /> Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}