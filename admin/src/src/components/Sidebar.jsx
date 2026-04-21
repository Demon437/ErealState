import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Calendar,
  LogOut,
  LayoutDashboard,
  Bell,
  User,
  ClipboardList,
  Users,
  FileText,
  ChevronLeft,
  ChevronRight,
  Building2,
  Menu,
} from "lucide-react";
import { cn } from "../lib/utils";

const Sidebar = ({ isOpen, setIsOpen, isCollapsed, setIsCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", isCollapsed.toString());
  }, [isCollapsed]);

  const isActive = (path) => location.pathname === path;

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  const navSections = [
    {
      label: "Main",
      items: [
        { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
        { path: "/pending-listings", label: "Review Queue", icon: ClipboardList },
        { path: "/list", label: "All Properties", icon: Building2 },
        { path: "/users", label: "Users", icon: Users },
        { path: "/appointments", label: "Appointments", icon: Calendar },
      ],
    },
    {
      label: "Activity",
      items: [{ path: "/activity-logs", label: "Activity Logs", icon: FileText }],
    },
  ];

  return (
    <>
      <style>{`
        .sidebar-nav::-webkit-scrollbar {
          width: 6px;
        }
        .sidebar-nav::-webkit-scrollbar-track {
          background: transparent;
        }
        .sidebar-nav::-webkit-scrollbar-thumb {
          background: rgba(201, 169, 110, 0.24);
          border-radius: 999px;
        }
        .sidebar-nav::-webkit-scrollbar-thumb:hover {
          background: rgba(201, 169, 110, 0.4);
        }
      `}</style>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-[#E8D8B8]/12 bg-[#081120] text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0",
          isCollapsed ? "lg:w-20" : "lg:w-72",
          "w-72"
        )}
      >
        {/* Soft glows */}
        <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-[#C9A96E]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#E8D8B8]/10 blur-3xl" />

        {/* Logo */}
        <div className="relative flex h-20 items-center justify-between border-b border-white/8 px-6">
          {!isCollapsed ? (
            <Link to="/dashboard" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C9A96E] shadow-[0_12px_24px_rgba(201,169,110,0.28)]"
              >
                <Home className="h-5 w-5 text-white" />
              </motion.div>

              <div>
                <span className="font-fraunces text-[26px] font-bold tracking-tight text-white">
                  BuildEstate
                </span>
                <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E8D8B8]/70">
                  Admin Panel
                </div>
              </div>
            </Link>
          ) : (
            <Link to="/dashboard" className="flex w-full items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C9A96E] shadow-[0_12px_24px_rgba(201,169,110,0.28)]"
              >
                <Home className="h-5 w-5 text-white" />
              </motion.div>
            </Link>
          )}
        </div>

        {/* Desktop Collapse Toggle */}
        <button
          onClick={toggleCollapse}
          className="absolute -right-3 top-24 hidden h-7 w-7 items-center justify-center rounded-full border-2 border-[#081120] bg-[#C9A96E] text-white shadow-lg transition hover:bg-[#B89259] lg:flex"
        >
          {isCollapsed ? (
            <ChevronRight className="h-3.5 w-3.5" />
          ) : (
            <ChevronLeft className="h-3.5 w-3.5" />
          )}
        </button>

        {/* Navigation */}
        <nav
          className="sidebar-nav relative flex-1 overflow-y-auto px-3 py-6"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(201, 169, 110, 0.24) transparent",
          }}
        >
          {navSections.map((section, idx) => (
            <div key={section.label} className={cn(idx > 0 && "mt-7")}>
              {!isCollapsed && (
                <div className="mb-3 px-3">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E8D8B8]/55">
                    {section.label}
                  </h3>
                </div>
              )}

              <div className="space-y-1.5">
                {section.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-2xl text-sm font-medium transition-all duration-200",
                      isCollapsed ? "justify-center px-3 py-3" : "px-4 py-3",
                      isActive(item.path)
                        ? "text-white"
                        : "text-[#C7CED8] hover:bg-white/6 hover:text-white"
                    )}
                    title={isCollapsed ? item.label : ""}
                  >
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeSidebarItem"
                        className="absolute inset-0 rounded-2xl border border-[#E8D8B8]/10 bg-[#C9A96E]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    <item.icon
                      className={cn(
                        "relative z-10 h-5 w-5 flex-shrink-0",
                        isActive(item.path)
                          ? "text-white"
                          : "text-[#C7CED8] group-hover:text-white"
                      )}
                    />

                    {!isCollapsed && (
                      <span className="relative z-10 flex-1">{item.label}</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer area */}
        <div className="relative border-t border-white/8 p-4">
          {/* Notifications */}
          {!isCollapsed ? (
            <button className="mb-2 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-[#C7CED8] transition-all duration-200 hover:bg-white/6 hover:text-white">
              <Bell className="h-5 w-5" />
              <span className="flex-1 text-left">Notifications</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A96E] text-[10px] font-bold text-white">
                3
              </span>
            </button>
          ) : (
            <button className="relative mb-2 flex w-full items-center justify-center rounded-2xl px-3 py-3 text-[#C7CED8] transition-all duration-200 hover:bg-white/6 hover:text-white">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#C9A96E] text-[9px] font-bold text-white">
                3
              </span>
            </button>
          )}

          {/* Profile */}
          {!isCollapsed ? (
            <div className="mb-2 flex items-center gap-3 rounded-2xl border border-white/6 bg-white/5 px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#C9A96E] shadow-[0_10px_20px_rgba(201,169,110,0.22)]">
                <User className="h-4 w-4 text-white" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-white">Admin</div>
                <div className="text-xs text-[#C7CED8]/70">Administrator</div>
              </div>
            </div>
          ) : (
            <div className="mb-2 flex items-center justify-center rounded-2xl border border-white/6 bg-white/5 px-3 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#C9A96E] shadow-[0_10px_20px_rgba(201,169,110,0.22)]">
                <User className="h-4 w-4 text-white" />
              </div>
            </div>
          )}

          {/* Logout */}
          {!isCollapsed ? (
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-red-300 transition-all duration-200 hover:bg-red-500/10 hover:text-red-200"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="flex w-full items-center justify-center rounded-2xl px-3 py-3 text-red-300 transition-all duration-200 hover:bg-red-500/10 hover:text-red-200"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </button>
          )}
        </div>
      </aside>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 rounded-xl border border-[#E8D8B8]/15 bg-[#081120] p-2.5 text-white shadow-lg lg:hidden"
      >
        {isOpen ? (
          <ChevronLeft className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>
    </>
  );
};

export default Sidebar;