import React, { useEffect, useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { User, ChevronDown, LogOut } from "lucide-react";

const AUTH_TOKEN_KEY = "authToken";
const USER_DATA_KEY = "user";

const Navbar = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [authState, setAuthState] = useState(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    const userData = localStorage.getItem(USER_DATA_KEY);

    if (token && userData) {
      try {
        return { loggedIn: true, user: JSON.parse(userData) };
      } catch {
        return { loggedIn: false, user: { name: "", email: "" } };
      }
    }
    return { loggedIn: false, user: { name: "", email: "" } };
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const { loggedIn, user } = authState;

  const checkLogin = useCallback(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    const userData = localStorage.getItem(USER_DATA_KEY);

    if (token && userData) {
      try {
        setAuthState({ loggedIn: true, user: JSON.parse(userData) });
      } catch {
        setAuthState({ loggedIn: false, user: { name: "", email: "" } });
      }
    } else {
      setAuthState({ loggedIn: false, user: { name: "", email: "" } });
    }
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(USER_DATA_KEY);
    setAuthState({ loggedIn: false, user: { name: "", email: "" } });
    setShowDropdown(false);
    window.dispatchEvent(new Event("authChange"));
    navigate("/", { replace: true });
  }, [navigate]);

  const handleProfileClick = () => {
    if (loggedIn) {
      setShowDropdown((prev) => !prev);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [showDropdown]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if ([AUTH_TOKEN_KEY, USER_DATA_KEY].includes(e.key)) {
        checkLogin();
      }
    };

    const handleAuthChange = () => checkLogin();

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, [checkLogin]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-md transition-transform group-hover:scale-[1.03]">
              <span className="text-white font-bold text-lg">PK</span>
            </div>

            <div className="hidden sm:block leading-tight">
              <p className="text-lg font-semibold text-gray-900">
                Padoshi Kitchen
              </p>
              <p className="text-xs text-gray-500">
                Home-cooked happiness
              </p>
            </div>
          </button>

          {/* Right Section */}
          <div className="relative" ref={dropdownRef}>
            {loggedIn ? (
              <>
                {/* Profile Button */}
                <button
                  onClick={handleProfileClick}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition shadow-sm focus:outline-none"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>

                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-semibold text-gray-900 truncate max-w-[120px]">
                      {user.name.split(" ")[0]}
                    </p>
                    <p className="text-xs text-gray-500 truncate max-w-[120px]">
                      {user.email}
                    </p>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {showDropdown && (
                  <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    
                    <div className="px-4 py-4 bg-gray-50 border-b">
                      <p className="font-semibold text-gray-900 truncate">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-600 truncate mt-1">
                        {user.email}
                      </p>
                    </div>

                    <div className="p-2">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Button
                variant="primary"
                size="md"
                onClick={() => navigate("/login")}
                className="shadow-md hover:shadow-lg transition"
              >
                Login / Register
              </Button>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
