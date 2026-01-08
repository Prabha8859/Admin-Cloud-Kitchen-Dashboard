// src/components/register/OtpVerification.jsx
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const OtpVerification = ({ next, emailOrPhone, fullName }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const isFilled = otp.every((d) => d !== "");

  const handleChange = (i, v) => {
    if (!/^\d*$/.test(v)) return;
    const copy = [...otp];
    copy[i] = v.slice(-1);
    setOtp(copy);
    if (v && i < 5) inputRefs.current[i + 1].focus();
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) {
      inputRefs.current[i - 1].focus();
    }
  };

  const handleVerify = () => {
    if (!isFilled) return;

    localStorage.setItem("authToken", "demo-token");
    localStorage.setItem(
      "user",
      JSON.stringify({ name: fullName, email: emailOrPhone })
    );
    window.dispatchEvent(new Event("authChange"));
    next();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-4">
      <div className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl">

        {/* TOP BRAND STRIP */}
        <div className="gradient-kitchen px-8 py-6 text-white">
          <h2 className="text-2xl font-semibold">OTP Verification</h2>
          <p className="text-sm opacity-90 mt-1">
            Secure login for Kitchen Cloud
          </p>
        </div>

        {/* CLOSE */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-2xl text-white/80 hover:text-white"
        >
          ×
        </button>

        {/* BODY */}
        <div className="p-8">
          <p className="text-[var(--gray)] mb-8 leading-relaxed text-sm">
            Enter the 6-digit code sent to <br />
            <span className="font-semibold text-[var(--dark)]">
              {emailOrPhone}
            </span>
          </p>

          {/* OTP BOXES */}
          <div className="flex justify-between mb-10">
            {otp.map((d, i) => (
              <input
                key={i}
                ref={(el) => (inputRefs.current[i] = el)}
                type="text"
                value={d}
                maxLength="1"
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className="
                  w-12 h-14 text-xl font-semibold text-center
                  rounded-xl border-2
                  border-[var(--light-gray)]
                  focus:border-[var(--primary)]
                  focus:shadow-[0_0_0_3px_rgba(255,107,53,0.18)]
                  transition-all outline-none
                "
              />
            ))}
          </div>

          {/* VERIFY */}
          <button
            onClick={handleVerify}
            disabled={!isFilled}
            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all
              ${
                isFilled
                  ? "btn-primary shadow-lg"
                  : "bg-[var(--light-gray)] text-[var(--gray)] cursor-not-allowed"
              }
            `}
          >
            Verify & Continue
          </button>

          {/* RESEND */}
          <div className="mt-6 text-center text-sm text-[var(--gray)]">
            Didn’t receive OTP?{" "}
            <button className="text-primary font-medium hover:underline">
              Resend
            </button>
          </div>

          {/* BACK */}
          <div className="mt-10 text-center">
            <button
              onClick={() => navigate(-1)}
              className="text-sm font-medium text-[var(--gray)] hover:text-[var(--dark)]"
            >
              ← Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
