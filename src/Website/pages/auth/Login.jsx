import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaEnvelope, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import Button from '../../components/ui/Button';
import InputField from '../../components/ui/InputField';

function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const inputRefs = useRef([]);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      setShowOTPModal(true);
      setTimer(30);
      setCanResend(false);
      setOtp(['', '', '', '', '', '']);
      setShowSuccessPopup(false);
    } else {
      alert('Please enter a valid 10-digit phone number');
    }
  };

  const handleGoogleLogin = () => {
    alert('Redirecting to Google login...');
  };

  const handleOTPChange = (value, index) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    if (newOtp.every(digit => digit !== '')) {
      const response = {
        token: 'sample-auth-token-12345',
        user: {
          name: 'John Doe',
          email: 'john@example.com'
        }
      };

      localStorage.setItem("authToken", response.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: response.user.name,
          email: response.user.email,
        })
      );

      setShowSuccessPopup(true);

      setTimeout(() => {
        setShowOTPModal(false);
        setShowSuccessPopup(false);
        navigate("/admin/dashboard", { replace: true });
      }, 2000);
    }
  };

  const handleOTPKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    if (canResend) {
      setTimer(30);
      setCanResend(false);
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0].focus();
    }
  };

  useEffect(() => {
    if (showOTPModal && timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => {
          const newTimer = prev - 1;
          if (newTimer === 0) {
            setCanResend(true);
          }
          return newTimer;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showOTPModal, timer]);

  useEffect(() => {
    if (showOTPModal && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [showOTPModal]);

  const formatTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Main Login Page */}
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to continue</p>
          </div>

          {/* Phone Login */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-rose-100 rounded-lg">
                <FaPhoneAlt className="text-rose-600" />
              </div>
              <span className="text-gray-800 font-semibold">Phone Login</span>
            </div>
          
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div className="flex border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-rose-500 transition-all">
                <div className="bg-gray-50 px-4 py-3 border-r border-gray-200">
                  <span className="text-gray-700 font-semibold">+91</span>
                </div>
                <InputField
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="10-digit mobile number"
                  className="flex-1 border-0 focus:ring-0 py-3"
                  type="tel"
                  maxLength="10"
                />
              </div>
            
              <Button type="submit" variant="primary" fullWidth className="py-3 font-semibold">
                Send OTP <FaArrowRight className="ml-2" />
              </Button>
            </form>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-gray-400 text-sm">Or</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Other Login Options */}
          <div className="mb-6 space-y-3">
            <Button variant="outline" fullWidth icon={<FaEnvelope className="text-rose-500" />}>
              Continue with Email
            </Button>
            <Button onClick={handleGoogleLogin} variant="outline" fullWidth icon={<FaGoogle className="text-red-500" />}>
              Sign in with Google
            </Button>
          </div>

          <div className="text-center pt-6 border-t border-gray-100">
            <p className="text-gray-600 text-sm">
              New user?{' '}
              <a href="/signup" className="text-rose-600 hover:text-rose-700 font-semibold">
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      {showOTPModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">OTP Verification</h2>
              <p className="text-gray-600 text-sm">Sent to +91 {phone}</p>
              <p className="text-rose-600 font-medium mt-2">{formatTimer()}</p>
            </div>

            <div className="flex justify-center gap-2 mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={el => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOTPChange(e.target.value, index)}
                  onKeyDown={(e) => handleOTPKeyDown(e, index)}
                  className="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-rose-500 focus:outline-none"
                />
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 text-sm mb-4">
                Didn't receive OTP?{' '}
                <button
                  onClick={handleResend}
                  className={`font-semibold ${canResend ? 'text-rose-600' : 'text-gray-400'}`}
                  disabled={!canResend}
                >
                  Resend {!canResend && `(${formatTimer()})`}
                </button>
              </p>
              <Button
                onClick={() => setShowOTPModal(false)}
                variant="ghost"
                className="text-gray-500 hover:text-gray-700"
              >
                Back to Login
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full mx-4 text-center animate-bounceIn">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Success!</h3>
            <p className="text-gray-600 mb-4">Redirecting to home...</p>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-green-500 h-1 rounded-full animate-[progress_2s_linear]" />
            </div>
          </div>
          <style jsx>{`
            @keyframes bounceIn {
              0% { transform: scale(0.9); opacity: 0; }
              60% { transform: scale(1.05); }
              100% { transform: scale(1); opacity: 1; }
            }
            @keyframes progress {
              from { width: 0%; }
              to { width: 100%; }
            }
            .animate-bounceIn {
              animation: bounceIn 0.5s ease-out;
            }
          `}</style>
        </div>
      )}
    </>
  );
}

export default Login;