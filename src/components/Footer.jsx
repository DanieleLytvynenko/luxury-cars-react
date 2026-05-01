import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-8 border-t border-white/[0.06] bg-dark">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <img src={logo} alt="LUXURY.CAR" className="h-[22px] w-auto opacity-70" />
        <p className="text-[0.8125rem] text-gray-500">
          © {new Date().getFullYear()} LUXURY.CAR — All rights reserved
        </p>
        <div className="flex gap-6">
          <button onClick={() => scrollTo("catalog")} className="text-[0.8125rem] text-gray-500 hover:text-accent transition-colors cursor-pointer">Fleet</button>
          <button onClick={() => scrollTo("order")} className="text-[0.8125rem] text-gray-500 hover:text-accent transition-colors cursor-pointer">Book Now</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
