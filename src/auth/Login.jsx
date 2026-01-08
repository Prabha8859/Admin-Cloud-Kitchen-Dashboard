import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@test.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = () => {
    // TEMP LOGIN (STATIC)
    if (email === "admin@test.com" && password === "123456") {
      localStorage.setItem("authToken", "temp-admin-token");
      localStorage.setItem("role", "ADMIN");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="card w-96">
        <h2 className="text-xl font-semibold mb-4">Admin Login</h2>

        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 mb-4 rounded"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="btn-primary w-full"
        >
          Login
        </button>

        <p className="text-xs text-gray-500 mt-3">
          Temp Login: admin@test.com / 123456
        </p>
      </div>
    </div>
  );
}
