"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";

export default function Contact() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", role: "", reason: "" });
    setStep(0);

    setTimeout(() => setSubmitStatus(null), 3000);
  };

  // Step content
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <p className="text-5xl md:text-7xl font-light text-white/90">
              Hello SBG, my name is
            </p>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Type here…"
              className="mt-8 w-full max-w-2xl text-4xl md:text-6xl font-light bg-transparent border-b-2 border-white/20 focus:border-[#A45AFA] outline-none transition placeholder:text-white/30 pb-2"
              autoFocus
            />
          </>
        );
      case 1:
        return (
          <>
            <p className="text-5xl md:text-7xl font-light text-white/90">
              …and my email is
            </p>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Type here…"
              className="mt-8 w-full max-w-2xl text-4xl md:text-6xl font-light bg-transparent border-b-2 border-white/20 focus:border-[#A45AFA] outline-none transition placeholder:text-white/30 pb-2"
              autoFocus
            />
          </>
        );
      case 2:
        return (
          <>
            <p className="text-5xl md:text-7xl font-light text-white/90">
              I work as a
            </p>
            <input
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="e.g. Developer, Designer…"
              className="mt-8 w-full max-w-2xl text-4xl md:text-6xl font-light bg-transparent border-b-2 border-white/20 focus:border-[#A45AFA] outline-none transition placeholder:text-white/30 pb-2"
              autoFocus
            />
          </>
        );
      case 3:
        return (
          <>
            <p className="text-5xl md:text-7xl font-light text-white/90">
              I’m reaching out about
            </p>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="mt-8 w-full max-w-2xl text-4xl md:text-6xl font-light bg-transparent border-b-2 border-white/20 focus:border-[#A45AFA] outline-none transition text-white/90 pb-2 appearance-none [&>option]:bg-[#050816]"
              autoFocus
            >
              <option value="" disabled>Select an option</option>
              <option value="sponsorship">Sponsorship &amp; Partnership</option>
              <option value="speaking">Speaking or Volunteering</option>
              <option value="tickets">Tickets &amp; Registration</option>
              <option value="press">Press &amp; Media</option>
              <option value="community">Community Partnership</option>
              <option value="other">Something else</option>
            </select>
          </>
        );
      default:
        return null;
    }
  };

  // Check if current step is valid to proceed
  const isStepValid = () => {
    if (step === 0) return formData.name.trim().length > 0;
    if (step === 1) return formData.email.trim().length > 0 && formData.email.includes("@");
    if (step === 2) return formData.role.trim().length > 0;
    if (step === 3) return formData.reason.length > 0;
    return false;
  };

  return (
    <section className="relative min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* Background effects (same as before) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[550px] w-[550px] rounded-full bg-[#A45AFA]/15 blur-[150px]" />
        <div className="absolute -right-32 bottom-0 h-[650px] w-[650px] rounded-full bg-[#A45AFA]/10 blur-[180px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(164,90,250,.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(164,90,250,.35) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#A45AFA]/40 animate-pulse"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 29) % 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Step indicator (dots) */}
        <div className="flex gap-3 mb-12">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === step ? "w-10 bg-[#A45AFA]" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>

        {/* Step container with slide animation */}
        <div className="relative w-full max-w-4xl overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${step * 100}%)` }}
          >
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <div key={idx} className="w-full flex-shrink-0 flex flex-col items-center text-center px-4">
                {renderStep()}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-6 mt-16">
          {step > 0 && (
            <button
              onClick={handleBack}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
          )}

          {step < totalSteps - 1 ? (
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#A45AFA] to-[#7C3AED] font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] transition"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isStepValid() || isSubmitting}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#A45AFA] to-[#7C3AED] font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] transition"
            >
              {isSubmitting ? "Sending…" : "Send Message"}
              <Send className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Status messages */}
        {submitStatus === "success" && (
          <p className="mt-6 text-green-400 text-center text-lg animate-pulse">
            ✅ Message sent successfully!
          </p>
        )}
        {submitStatus === "error" && (
          <p className="mt-6 text-red-400 text-center text-lg animate-pulse">
            ❌ Failed to send. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}