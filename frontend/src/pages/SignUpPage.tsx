import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthHeader from "../components/auth/AuthHeader";
import SignUpForm from "../components/auth/SignUpForm";
import { useAuth } from "../contexts/AuthContext";

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (formData: any) => {
    try {
      setError(null);
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      await register(fullName, formData.email, "", formData.password);
      navigate("/");
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FCFAF7] px-4 py-12">
      {/* Soft glow */}
      <div className="pointer-events-none absolute left-[10%] top-16 h-40 w-40 rounded-full bg-[#C9A96E]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[10%] h-52 w-52 rounded-full bg-[#E8D8B8]/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-[560px] items-center justify-center">
        <div className="w-full">
          {/* Logo */}
          <div className="mb-8">
            <AuthHeader />
          </div>

          {/* Sign Up Card */}
          <div className="rounded-[32px] border border-[#E5D9C7] bg-white/95 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-10">
            {/* Badge */}
            <div className="mb-5 flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#E5D9C7] bg-[#FCFAF7] px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#C9A96E]" />
                <span className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-[#B89259]">
                  Create Your Account
                </span>
              </div>
            </div>

            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="font-fraunces text-[40px] leading-tight text-[#0F172A] sm:text-[46px]">
                Join BuildEstate
              </h1>
              <p className="mt-3 font-manrope text-base text-[#64748B]">
                Create your account and start your premium property journey
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3">
                <p className="font-manrope text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Form */}
            <SignUpForm onSubmit={handleSignUp} />

            {/* Sign In */}
            <p className="mt-7 text-center font-manrope text-sm text-[#64748B]">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-semibold text-[#C9A96E] transition-colors hover:text-[#B89259]"
              >
                Sign In
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-manrope text-sm font-medium text-[#64748B] transition-colors hover:text-[#C9A96E]"
            >
              <span className="material-icons text-base">arrow_back</span>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;