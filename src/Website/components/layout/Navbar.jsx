import React, { useEffect, useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { User, ChevronDown, LogOut } from "lucide-react";

// Constants for localStorage keys
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
      } catch (error) {
        console.error("Error parsing user data:", error);
        return { loggedIn: false, user: { name: "", email: "" } };
      }
    }
    return { loggedIn: false, user: { name: "", email: "" } };
  });
  const [showDropdown, setShowDropdown] = useState(false);

  const { loggedIn, user } = authState;



  // Check and update login status
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

  // Handle logout
  const handleLogout = useCallback(() => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(USER_DATA_KEY);
    setAuthState({ loggedIn: false, user: { name: "", email: "" } });
    setShowDropdown(false);
    
    // Dispatch event for other tabs
    window.dispatchEvent(new Event("authChange"));
    navigate("/", { replace: true });
  }, [navigate]);

  // Handle profile click
  const handleProfileClick = () => {
    if (loggedIn) {
      setShowDropdown(prev => !prev);
    } else {
      navigate("/login");
    }
  };

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [showDropdown]);

  // Listen for auth changes
  useEffect(() => {
    // Handle storage events (other tabs)
    const handleStorageChange = (event) => {
      if ([AUTH_TOKEN_KEY, USER_DATA_KEY].includes(event.key)) {
        checkLogin();
      }
    };

    // Handle custom auth events (same tab)
    const handleAuthChange = () => {
      checkLogin();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, [checkLogin]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg p-1"
            aria-label="Go to homepage"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-sm">
              <span className="text-gray-900 font-bold text-lg">PK</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-gray-900 leading-tight">
                Padoshi Kitchen
              </span>
              <span className="text-xs text-gray-500 font-normal">
                Home-cooked happiness
              </span>
            </div>
          </button>

          {/* Right Side - Auth Section */}
          <div className="relative" ref={dropdownRef}>
            {loggedIn ? (
              <>
                {/* Profile Button */}
                <button
                  onClick={handleProfileClick}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  aria-label="User menu"
                  aria-expanded={showDropdown}
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center shadow-sm">
                    <User className="w-5 h-5 text-gray-900" />
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-medium text-gray-900 truncate max-w-[120px]">
                      {user.name.split(" ")[0]}
                    </p>
                    <p className="text-xs text-gray-500 truncate max-w-[120px]">
                      {user.email}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* User Info */}
                    <div className="px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-50/50 border-b">
                      <p className="font-semibold text-gray-900 truncate">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-600 truncate mt-1">
                        {user.email}
                      </p>
                    </div>

                    {/* Menu Items */}
                    <div className="p-2 space-y-1">
                      <button
                        onClick={() => {
                          navigate("/profile");
                          setShowDropdown(false);
                        }}
                        className="w-full px-3 py-2 text-left rounded-lg hover:bg-gray-50 text-gray-700 transition-colors text-sm font-medium flex items-center gap-2"
                      >
                        <User className="w-4 h-4" />
                        My Profile
                      </button>
                      <button
                        onClick={() => {
                          navigate("/orders");
                          setShowDropdown(false);
                        }}
                        className="w-full px-3 py-2 text-left rounded-lg hover:bg-gray-50 text-gray-700 transition-colors text-sm font-medium flex items-center gap-2"
                      >
                        <User className="w-4 h-4" />
                        My Orders
                      </button>
                    </div>

                    {/* Logout Button */}
                    <div className="p-2 border-t">
                      <button
                        onClick={handleLogout}
                        className="w-full px-3 py-2 text-left rounded-lg hover:bg-red-50 text-red-600 transition-colors text-sm font-medium flex items-center gap-2 border border-red-100"
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
                className="shadow-sm hover:shadow transition-shadow"
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