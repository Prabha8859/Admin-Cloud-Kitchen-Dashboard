import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpVerification from "../../components/register/OtpVerification";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";

const SignupPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [form, setForm] = useState({
    fullName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid =
    form.fullName.trim() !== "" && form.email.trim() !== "";

  const handleCreateAccount = () => {
    if (!isFormValid) return;

    setFormData({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
    });

    setStep(1);
  };

  /* ================= STEP 1 : SIGNUP ================= */
  if (step === 0) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ background: "var(--bg)" }}
      >
        <div
          className="relative w-full max-w-md rounded-2xl shadow-xl"
          style={{
            background: "var(--white)",
            padding: "40px 32px",
          }}
        >
          {/* Close */}
          <button
            onClick={() => navigate("/")}
            className="absolute top-4 right-4 text-xl text-gray-400 hover:text-gray-600"
          >
            ×
          </button>

          {/* 🔥 HEADER */}
          <div className="mb-8">
            <span
              className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{
                background: "var(--primary-light)",
                color: "var(--primary)",
              }}
            >
              🚀 Get started
            </span>

            <h1
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "var(--dark)",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
              }}
            >
              Join{" "}
              <span style={{ color: "var(--primary)" }}>
                Kitchen Cloud
              </span>
            </h1>

            <p
              className="mt-3"
              style={{
                fontSize: "14px",
                color: "var(--gray)",
                lineHeight: "1.6",
              }}
            >
              Create your account to discover and order fresh homemade food from
              kitchens near you.
            </p>
          </div>

          {/* Full Name */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2 text-dark">
              Full name
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="input-kitchen"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-dark">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input-kitchen"
            />
          </div>

          {/* Terms */}
          <label className="flex gap-3 text-sm mb-8 cursor-pointer">
            <input type="checkbox" className="mt-1" />
            <span style={{ color: "var(--gray)" }}>
              I agree to Kitchen Cloud’s{" "}
              <span
                style={{ color: "var(--primary)", fontWeight: 600 }}
              >
                Terms of Service, Privacy Policy
              </span>{" "}
              and Content Policies
            </span>
          </label>

          {/* CTA */}
          <button
            onClick={handleCreateAccount}
            disabled={!isFormValid}
            className="btn-primary w-full"
            style={{ opacity: isFormValid ? 1 : 0.6 }}
          >
            Continue →
          </button>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="px-3 text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google */}
          <button
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border"
            style={{ borderColor: "var(--light-gray)" }}
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

          {/* Login */}
          <p className="text-center text-sm mt-8 text-gray-600">
            Already have an account?{" "}
            <span
              className="font-semibold cursor-pointer"
              style={{ color: "var(--primary)" }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    );
  }

  /* ================= STEP 2 : OTP ================= */
  return (
    <OtpVerification
      next={() => navigate("/register-kitchen")}
      emailOrPhone={formData.email}
      fullName={formData.fullName}
    />
  );
};

export default SignupPage;
