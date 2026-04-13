import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../contexts/AuthContext";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMobileMenu();
    navigate("/");
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/properties", label: "Properties" },
   
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="border-b border-[#E5D9C7] bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
      >
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8 ">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={closeMobileMenu}
          >
            <img
              src="/logo.png"
              alt="BuildEstate"
              className="h-10 w-auto sepia saturate-150 hue-rotate-[345deg] brightness-[0.95]"
            />
            <span className="font-fraunces text-[28px] font-bold text-[#0F172A]">
              Webix_Realestate
            </span>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[16px] font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-[#C9A96E]"
                    : "text-[#475569] hover:text-[#C9A96E]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated && user ? (
              <>
                <span className="rounded-full border border-[#E5D9C7] bg-[#F8F5EF] px-4 py-2 text-sm font-medium text-[#334155]">
                  Hi, {user.name}
                </span>

                <Link
                  to="/my-listings"
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                    isActive("/my-listings")
                      ? "bg-[#F8F5EF] text-[#C9A96E]"
                      : "text-[#334155] hover:bg-[#F8F5EF] hover:text-[#C9A96E]"
                  }`}
                >
                  My Listings
                </Link>

                <Link
                  to="/add-property"
                  className="rounded-full bg-[#C9A96E] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_20px_rgba(201,169,110,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B89259]"
                >
                  + List Property
                </Link>

                <button
                  onClick={handleLogout}
                  className="rounded-full border border-[#E5D9C7] px-4 py-2 text-sm font-semibold text-[#334155] transition-colors duration-300 hover:bg-[#F8F5EF] hover:text-[#C9A96E]"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="rounded-full px-4 py-2 text-sm font-semibold text-[#334155] transition-colors duration-300 hover:text-[#C9A96E]"
                >
                  Sign In
                </Link>

                <Link
                  to="/signup"
                  className="rounded-full bg-[#C9A96E] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_20px_rgba(201,169,110,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B89259]"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E5D9C7] bg-white text-[#334155] transition-colors duration-300 hover:text-[#C9A96E] lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className="font-material-icons text-[26px]">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="border-t border-[#E5D9C7] bg-white/95 backdrop-blur-xl lg:hidden"
            >
              <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-4 py-5 sm:px-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={`text-[16px] font-medium transition-colors duration-300 ${
                      isActive(link.path)
                        ? "text-[#C9A96E]"
                        : "text-[#475569] hover:text-[#C9A96E]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mt-2 border-t border-[#E5D9C7] pt-4">
                  {isAuthenticated && user ? (
                    <div className="flex flex-col gap-3">
                      <div className="rounded-2xl bg-[#F8F5EF] px-4 py-3 text-sm text-[#334155]">
                        Signed in as{" "}
                        <span className="font-semibold">{user.name}</span>
                      </div>

                      <Link
                        to="/my-listings"
                        onClick={closeMobileMenu}
                        className="rounded-2xl px-4 py-3 text-base font-semibold text-[#334155] transition-colors duration-300 hover:bg-[#F8F5EF] hover:text-[#C9A96E]"
                      >
                        My Listings
                      </Link>

                      <Link
                        to="/add-property"
                        onClick={closeMobileMenu}
                        className="rounded-2xl bg-[#C9A96E] px-4 py-3 text-center text-base font-bold text-white shadow-[0_10px_20px_rgba(201,169,110,0.28)] transition-colors duration-300 hover:bg-[#B89259]"
                      >
                        + List Property
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="rounded-2xl border border-[#E5D9C7] px-4 py-3 text-left text-base font-semibold text-[#334155] transition-colors duration-300 hover:bg-[#F8F5EF] hover:text-[#C9A96E]"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      <Link
                        to="/signin"
                        onClick={closeMobileMenu}
                        className="rounded-2xl border border-[#E5D9C7] px-4 py-3 text-center text-base font-semibold text-[#334155] transition-colors duration-300 hover:bg-[#F8F5EF] hover:text-[#C9A96E]"
                      >
                        Sign In
                      </Link>

                      <Link
                        to="/signup"
                        onClick={closeMobileMenu}
                        className="rounded-2xl bg-[#C9A96E] px-4 py-3 text-center text-base font-bold text-white shadow-[0_10px_20px_rgba(201,169,110,0.28)] transition-colors duration-300 hover:bg-[#B89259]"
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;