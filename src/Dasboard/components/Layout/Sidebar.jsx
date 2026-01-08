import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Grid3x3,
  Users,
  ChevronRight,
  ChevronLeft,
  Shapes,
  UtensilsCrossed,
  ShoppingCart,
  CreditCard,
} from 'lucide-react';

const links = [
  { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Categories", path: "/admin/categories", icon: Shapes },
  { name: "Menu", path: "/admin/menu", icon: UtensilsCrossed },
  { name: "Orders", path: "/admin/orders", icon: ShoppingCart },
  { name: "Payments", path: "/admin/payments", icon: CreditCard },
  { name: "Users", path: "/admin/users", icon: Users },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();

  // Effect to handle automatic collapsing on mobile screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { // Tailwind's `md` breakpoint
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Collapse sidebar on route change on mobile
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsExpanded(false);
    }
  }, [location.pathname]);

  return (
    <aside 
      className={`sticky top-0 h-screen bg-fixed bg-gradient-to-br from-[rgb(var(--sidebar-bg-from))] to-[rgb(var(--sidebar-bg-to))] shadow-[4px_0_24px_rgba(0,0,0,0.15)] flex flex-col relative transition-all duration-300 ease-in-out z-30
      ${isExpanded ? 'w-72 p-4' : 'w-20 p-3'}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[50%] -right-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(var(--accent-from),0.1)_0%,transparent_70%)]" />
      </div>

      {/* Toggle Button (Trendy Icon) */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-12 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-transform hover:scale-110 z-50 border border-gray-100"
      >
        <ChevronLeft className={`w-4 h-4 text-[rgb(var(--color-primary))] transition-transform duration-300 ${!isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {/* Header / Logo */}
      <div className={`flex items-center gap-3 mb-8 relative z-10 transition-all duration-300 ${isExpanded ? 'px-3' : 'justify-center'}`}>
        <div className="w-11 h-11 min-w-[44px] bg-gradient-to-br from-[rgb(var(--accent-from))] to-[rgb(var(--accent-to))] rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(139,92,246,0.3)]">
          <Grid3x3 className="w-6 h-6 text-white" />
        </div>
        
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>
          <h2 className="text-xl font-bold text-white tracking-tight whitespace-nowrap">Admin Panel</h2>
        </div>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex flex-col gap-1.5 relative z-10">
        {links.map((link) => {
          const Icon = link.icon;
          
          return (
            <NavLink
              key={link.path}
              to={link.path}
              title={!isExpanded ? link.name : ""}
              className={({ isActive }) =>
                `group flex items-center py-3.5 rounded-xl border border-transparent cursor-pointer transition-all duration-300 ease-in-out relative overflow-hidden text-white/70
                hover:border-[rgba(var(--accent-from),0.3)] hover:shadow-[0_4px_16px_rgba(var(--accent-from),0.2)] hover:text-white
                before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(var(--accent-from),0.15)] before:to-[rgba(var(--accent-to),0.15)] before:opacity-0 hover:before:opacity-100 before:transition-opacity
                ${
                  isActive
                    ? "bg-gradient-to-br from-[rgba(var(--accent-from),0.25)] to-[rgba(var(--accent-to),0.25)] border-[rgba(var(--accent-from),0.5)] shadow-[0_4px_20px_rgba(var(--accent-from),0.3),inset_0_1px_2px_rgba(255,255,255,0.1)] text-white before:opacity-100"
                    : ""
                }
                ${isExpanded ? 'px-4 justify-between hover:translate-x-1' : 'justify-center px-2'}`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-3 relative z-10">
                    <Icon className="w-5 h-5 shrink-0" />
                    <span className={`text-[15px] font-medium tracking-tight whitespace-nowrap transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}`}>
                      {link.name}
                    </span>
                  </div>
                  
                  {isExpanded && (
                    <ChevronRight
                      className={`w-[18px] h-[18px] shrink-0 relative z-10 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-60 group-hover:translate-x-0
                      ${isActive ? "!opacity-100 !translate-x-0" : ""}`}
                    />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

    </aside>
  );
}