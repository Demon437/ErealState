import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const socialLinks = [
    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#081120] text-white">
      {/* Soft gold glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-[#C9A96E]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#E8D8B8]/10 blur-3xl" />

      {/* Top subtle gradient line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#B89259] via-[#E8D8B8] to-[#B89259]" />

      <div className="relative mx-auto max-w-[1280px] px-6 py-16 sm:px-8 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_1fr_1.1fr]">
          {/* Brand Column */}
          <div>
            <Link to="/" className="mb-7 flex items-center gap-3">
              <img
                src="/logo.png"
                alt="BuildEstate"
                className="h-10 w-auto sepia saturate-150 hue-rotate-[345deg] brightness-[1.1]"
              />
              <span className="font-fraunces text-[34px] font-bold text-white">
                Webix_Buildestate
              </span>
            </Link>

            <p className="max-w-[320px] font-manrope text-[17px] leading-8 text-[#C7CED8]">
              AI-powered luxury real estate platform connecting you with your
              dream home through intelligent matching and personalized
              recommendations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E8D8B8]/15 bg-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A96E]/40 hover:bg-[#C9A96E] hover:shadow-[0_16px_30px_rgba(201,169,110,0.18)]"
                >
                  <Icon className="h-5 w-5 text-[#C7CED8] transition-colors duration-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-fraunces text-[26px] font-semibold text-white">
              Quick Links
            </h4>

            <ul className="space-y-4">
              {[
                { to: "/properties", label: "Browse Properties" },
                { to: "/ai-hub", label: "AI Property Hub" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="inline-flex font-manrope text-[17px] text-[#C7CED8] transition-all duration-300 hover:translate-x-1 hover:text-[#E8D8B8]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li>
                <a
                  href="#"
                  className="inline-flex font-manrope text-[17px] text-[#C7CED8] transition-all duration-300 hover:translate-x-1 hover:text-[#E8D8B8]"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="inline-flex font-manrope text-[17px] text-[#C7CED8] transition-all duration-300 hover:translate-x-1 hover:text-[#E8D8B8]"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 font-fraunces text-[26px] font-semibold text-white">
              Contact Info
            </h4>

            <ul className="space-y-5">
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 font-manrope text-[17px] leading-8 text-[#C7CED8] transition-colors duration-300 hover:text-white"
                >
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#C9A96E]" />
                  <span>
                    502, Devpath Building,
                    <br />
                    Near Torrent Lab,
                    <br />
                    Ashram Road, Ahmedabad
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 font-manrope text-[17px] text-[#C7CED8] transition-colors duration-300 hover:text-white"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 text-[#C9A96E]" />
                  <span>+91 98765 43210</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:hello@buildestate.com"
                  className="flex items-center gap-4 font-manrope text-[17px] text-[#C7CED8] transition-colors duration-300 hover:text-white"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 text-[#C9A96E]" />
                  <span>hello@buildestate.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6 font-fraunces text-[26px] font-semibold text-white">
              Stay Updated
            </h4>

            <p className="mb-5 font-manrope text-[17px] leading-8 text-[#C7CED8]">
              Subscribe to our newsletter for the latest listings, market
              insights, and exclusive offers.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full rounded-2xl border border-[#E8D8B8]/15 bg-white/5 px-5 py-4 font-manrope text-[15px] text-white placeholder:text-[#7C8798] outline-none transition-all duration-300 focus:border-[#C9A96E] focus:bg-white/10"
                required
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#C9A96E] px-5 py-4 font-manrope text-[17px] font-bold text-white shadow-[0_18px_35px_rgba(201,169,110,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B89259]"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-4 font-manrope text-sm text-[#7C8798]">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center font-manrope text-sm text-[#7C8798] md:text-left">
              © 2026 BuildEstate. All rights reserved. Powered by AI.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="font-manrope text-sm text-[#7C8798] transition-colors duration-300 hover:text-[#E8D8B8]"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;