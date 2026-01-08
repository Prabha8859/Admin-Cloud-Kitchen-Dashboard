import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, User, LogOut, Settings, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Clear auth data (using localStorage for dummy login)
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 relative z-20">
      {/* Left Section - Page Title */}
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[rgb(var(--accent-from))] to-[rgb(var(--accent-to))] bg-clip-text text-transparent">
          Dashboard
        </h1>
      </div>

      {/* Right Section - Actions */}
      <div className="flex items-center gap-4">
        <SearchBar />
        <NotificationButton />
        <ProfileDropdown 
          isOpen={isDropdownOpen}
          onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
          onLogout={handleLogout}
          dropdownRef={dropdownRef}
        />
      </div>
    </header>
  );
}

// ============================================
// Search Bar Component
// ============================================

function SearchBar() {
  return (
    <div className="relative hidden md:flex items-center">
      <Search className="absolute left-3 w-4 h-4 text-gray-400" />
      <input
        type="text"
        placeholder="Search..."
        className="pl-10 pr-4 py-2 w-64 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all duration-200"
      />
    </div>
  );
}

// ============================================
// Notification Button Component
// ============================================

function NotificationButton() {
  return (
    <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group">
      <Bell className="w-5 h-5 text-gray-600 group-hover:text-violet-600 transition-colors duration-200" />
      {/* Notification Badge */}
      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
    </button>
  );
}

// ============================================
// Profile Dropdown Component
// ============================================

function ProfileDropdown({ isOpen, onToggle, onLogout, dropdownRef }) {
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        onClick={onToggle}
        className="flex items-center gap-2 p-2 pr-3 rounded-lg hover:bg-gray-100 transition-all duration-200 group"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shadow-md">
          <User className="w-4 h-4 text-white" />
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-slideDown">
          {/* User Info */}
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-semibold text-gray-800">John Doe</p>
            <p className="text-xs text-gray-500 mt-0.5">john.doe@example.com</p>
          </div>

          {/* Menu Items */}
          <DropdownItem
            icon={User}
            label="Profile"
            onClick={() => console.log('Navigate to profile')}
          />
          <DropdownItem
            icon={Settings}
            label="Settings"
            onClick={() => console.log('Navigate to settings')}
          />
          
          {/* Divider */}
          <div className="h-px bg-gray-100 my-2"></div>

          {/* Logout */}
          <DropdownItem
            icon={LogOut}
            label="Logout"
            onClick={onLogout}
            variant="danger"
          />
        </div>
      )}
    </div>
  );
}

// ============================================
// Dropdown Item Component
// ============================================

function DropdownItem({ icon: Icon, label, onClick, variant = 'default' }) {
  const baseClasses = "flex items-center gap-3 w-full px-4 py-2.5 text-sm transition-colors duration-150";
  
  const variantClasses = {
    default: "text-gray-700 hover:bg-violet-50 hover:text-violet-600",
    danger: "text-red-600 hover:bg-red-50"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      <Icon className="w-4 h-4" />
      <span className="font-medium">{label}</span>
    </button>
  );
}
