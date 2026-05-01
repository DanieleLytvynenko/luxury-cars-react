import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  const scrollToSection = useCallback((sectionId) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname, navigate]);

  const NavLink = ({ sectionId, children, className }) => (
    <button
      onClick={() => scrollToSection(sectionId)}
      className={className}
    >
      {children}
    </button>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] py-4 border-b border-white/5 backdrop-blur-xl transition-colors duration-300 ${
        isScrolled ? "bg-dark/[0.98]" : "bg-dark/[0.85]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex items-center justify-between gap-6">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="LUXURY.CAR" className="h-7 w-auto" />
        </Link>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] w-8 h-8 justify-center bg-transparent border-none cursor-pointer p-0"
          onClick={toggleMenu}
          aria-label="Open navigation menu"
        >
          <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Main navigation">
          <Link to="/" className="px-4 py-2 text-[0.8125rem] font-medium tracking-wider uppercase text-gray-400 rounded-lg hover:text-white transition-colors">
            Home
          </Link>
          <NavLink sectionId="catalog" className="px-4 py-2 text-[0.8125rem] font-medium tracking-wider uppercase text-gray-400 rounded-lg hover:text-white transition-colors cursor-pointer">
            Fleet
          </NavLink>
          <NavLink sectionId="how" className="px-4 py-2 text-[0.8125rem] font-medium tracking-wider uppercase text-gray-400 rounded-lg hover:text-white transition-colors cursor-pointer">
            How It Works
          </NavLink>
          <NavLink sectionId="order" className="px-4 py-2 text-[0.8125rem] font-bold tracking-wider uppercase bg-accent text-dark rounded-lg ml-2 hover:bg-accent-dark transition-colors cursor-pointer">
            Book Now
          </NavLink>
        </nav>

        {/* Mobile nav */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col fixed top-[65px] left-0 right-0 bottom-0 bg-dark p-8 gap-2 z-[999]">
            <Link to="/" className="text-2xl py-3 border-b border-white/[0.06] text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <NavLink sectionId="catalog" className="text-2xl py-3 border-b border-white/[0.06] text-gray-400 hover:text-white transition-colors text-left cursor-pointer">
              Fleet
            </NavLink>
            <NavLink sectionId="how" className="text-2xl py-3 border-b border-white/[0.06] text-gray-400 hover:text-white transition-colors text-left cursor-pointer">
              How It Works
            </NavLink>
            <NavLink sectionId="order" className="mt-4 px-6 py-3.5 bg-accent text-dark font-bold text-base uppercase tracking-wider rounded-lg text-center hover:bg-accent-dark transition-colors cursor-pointer">
              Book Now
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
