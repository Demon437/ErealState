import React, { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { contactAPI } from "../../services/api";

const ContactFormCard: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      await contactAPI.submit({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phoneNumber,
        message: formData.message,
      });

      setStatus("success");
      setStatusMessage(
        "Message sent successfully. Our team will get back to you within 24 hours."
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setStatusMessage(
        err?.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[#E5D9C7] bg-white/95 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
      {/* Soft glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-[#C9A96E]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#E8D8B8]/20 blur-3xl" />

      {/* Header */}
      <div className="relative mb-8">
        <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#E5D9C7] bg-[#FCFAF7] px-4 py-2 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[#C9A96E]" />
          <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#B89259]">
            Premium Assistance
          </span>
        </div>

        <h2 className="font-fraunces text-[30px] leading-tight text-[#0F172A] sm:text-[36px]">
          Let’s Talk About Your
          <span className="italic text-[#C9A96E]"> Next Property</span>
        </h2>

        <p className="mt-3 max-w-[620px] font-manrope text-[15px] leading-7 text-[#64748B] sm:text-base">
          Share your requirements and our specialists will guide you with
          tailored recommendations, verified listings, and a seamless buying
          experience.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="relative space-y-5">
        {/* First + Last */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="group">
            <label className="mb-2 block font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8798]">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="John"
              className="w-full rounded-2xl border border-[#E5D9C7] bg-[#FCFAF7] px-5 py-4 font-manrope text-sm text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition-all duration-300 focus:border-[#C9A96E] focus:bg-white focus:shadow-[0_0_0_4px_rgba(201,169,110,0.14)]"
              required
            />
          </div>

          <div className="group">
            <label className="mb-2 block font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8798]">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Doe"
              className="w-full rounded-2xl border border-[#E5D9C7] bg-[#FCFAF7] px-5 py-4 font-manrope text-sm text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition-all duration-300 focus:border-[#C9A96E] focus:bg-white focus:shadow-[0_0_0_4px_rgba(201,169,110,0.14)]"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8798]">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john.doe@example.com"
            className="w-full rounded-2xl border border-[#E5D9C7] bg-[#FCFAF7] px-5 py-4 font-manrope text-sm text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition-all duration-300 focus:border-[#C9A96E] focus:bg-white focus:shadow-[0_0_0_4px_rgba(201,169,110,0.14)]"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8798]">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="+91 98765 43210"
            className="w-full rounded-2xl border border-[#E5D9C7] bg-[#FCFAF7] px-5 py-4 font-manrope text-sm text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition-all duration-300 focus:border-[#C9A96E] focus:bg-white focus:shadow-[0_0_0_4px_rgba(201,169,110,0.14)]"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8798]">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your inquiry, preferred location, budget, or the kind of property you’re looking for..."
            rows={6}
            className="w-full resize-none rounded-2xl border border-[#E5D9C7] bg-[#FCFAF7] px-5 py-4 font-manrope text-sm leading-7 text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition-all duration-300 focus:border-[#C9A96E] focus:bg-white focus:shadow-[0_0_0_4px_rgba(201,169,110,0.14)]"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#C9A96E] px-6 py-4 font-manrope text-base font-bold text-white shadow-[0_18px_35px_rgba(201,169,110,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B89259] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send Message
            </>
          )}
        </button>

        {/* Success */}
        {status === "success" && (
          <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <p className="font-manrope text-sm leading-6 text-emerald-700">
              {statusMessage}
            </p>
          </div>
        )}

        {/* Error */}
        {status === "error" && (
          <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-4">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
            <p className="font-manrope text-sm leading-6 text-red-700">
              {statusMessage}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactFormCard;