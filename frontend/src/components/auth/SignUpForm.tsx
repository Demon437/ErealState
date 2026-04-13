import React from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

interface SignUpFormProps {
  onSubmit: (data: any) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* First + Last */}
      <div className="grid grid-cols-2 gap-4">
        {["firstName", "lastName"].map((field, i) => (
          <div key={i}>
            <label className="mb-2 block font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8798]">
              {field === "firstName" ? "First Name" : "Last Name"}
            </label>

            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />

              <input
                type="text"
                name={field}
                value={(formData as any)[field]}
                onChange={handleInputChange}
                placeholder={field === "firstName" ? "John" : "Doe"}
                className="w-full rounded-2xl border border-[#E5D9C7] bg-[#FCFAF7] pl-12 pr-4 py-4 text-sm text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition-all focus:border-[#C9A96E] focus:bg-white focus:shadow-[0_0_0_4px_rgba(201,169,110,0.15)]"
                required
              />
            </div>
          </div>
        ))}
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8798]">
          Email Address
        </label>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john.doe@example.com"
            className="w-full rounded-2xl border border-[#E5D9C7] bg-[#FCFAF7] pl-12 pr-4 py-4 text-sm text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition-all focus:border-[#C9A96E] focus:bg-white focus:shadow-[0_0_0_4px_rgba(201,169,110,0.15)]"
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
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Create a strong password"
            className="w-full rounded-2xl border border-[#E5D9C7] bg-[#FCFAF7] pl-12 pr-12 py-4 text-sm text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition-all focus:border-[#C9A96E] focus:bg-white focus:shadow-[0_0_0_4px_rgba(201,169,110,0.15)]"
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#C9A96E]"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label className="mb-2 block font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8798]">
          Confirm Password
        </label>

        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />

          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Re-enter password"
            className="w-full rounded-2xl border border-[#E5D9C7] bg-[#FCFAF7] pl-12 pr-12 py-4 text-sm text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition-all focus:border-[#C9A96E] focus:bg-white focus:shadow-[0_0_0_4px_rgba(201,169,110,0.15)]"
            required
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#C9A96E]"
          >
            {showConfirmPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
      </div>

      {/* Terms */}
      <label className="flex gap-3 cursor-pointer text-sm text-[#64748B]">
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleInputChange}
          className="mt-1 accent-[#C9A96E]"
          required
        />
        <span>
          I agree to{" "}
          <Link to="/terms" className="text-[#C9A96E] font-semibold">
            Terms
          </Link>{" "}
          &{" "}
          <Link to="/privacy" className="text-[#C9A96E] font-semibold">
            Privacy
          </Link>
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-2xl bg-[#C9A96E] py-4 font-bold text-white shadow-[0_18px_35px_rgba(201,169,110,0.25)] transition-all hover:bg-[#B89259]"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignUpForm;