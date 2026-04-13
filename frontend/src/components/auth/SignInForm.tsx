import React from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

interface SignInFormProps {
  onSubmit: (data: any) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email */}
      <div>
        <label className="mb-2 block font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8798]">
          Email Address
        </label>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#94A3B8]" />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john.doe@example.com"
            className="w-full rounded-2xl border border-[#E5D9C7] bg-[#FCFAF7] pl-12 pr-4 py-4 font-manrope text-sm text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition-all duration-300 focus:border-[#C9A96E] focus:bg-white focus:shadow-[0_0_0_4px_rgba(201,169,110,0.15)]"
            required
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="mb-2 block font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8798]">
          Password
        </label>

        <div className="relative">
          <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#94A3B8]" />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            className="w-full rounded-2xl border border-[#E5D9C7] bg-[#FCFAF7] pl-12 pr-12 py-4 font-manrope text-sm text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition-all duration-300 focus:border-[#C9A96E] focus:bg-white focus:shadow-[0_0_0_4px_rgba(201,169,110,0.15)]"
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] transition-colors hover:text-[#C9A96E]"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Remember + Forgot */}
      <div className="flex items-center justify-between gap-4">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleInputChange}
            className="h-4 w-4 rounded border-[#E5D9C7] accent-[#C9A96E]"
          />
          <span className="font-manrope text-sm text-[#64748B]">
            Remember me
          </span>
        </label>

        <Link
          to="/forgot-password"
          className="font-manrope text-sm font-semibold text-[#C9A96E] transition-colors hover:text-[#B89259]"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full rounded-2xl bg-[#C9A96E] py-4 font-manrope text-base font-bold text-white shadow-[0_18px_35px_rgba(201,169,110,0.25)] transition-all duration-300 hover:bg-[#B89259]"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;