import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/icon/CCEF-logo.svg";
import { navItems } from "@/common/constant";

const Navigation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobile(false);
  }, [location.pathname]);

  const openMenu = () => setIsMobile(true);

  const activeStyle = `text-primary-500 after:scale-x-110`;
  const linkStyle = `text-gray-700 hover:text-primary-500 relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary-500 after:w-full after:scale-x-0 after:hover:scale-x-110 after:transition after:duration-300 after:origin-center text-sm font-medium`;

  return (
    <>
      <nav
        className={`px-5 py-4 lg:px-20 sticky top-0 bg-white z-50 transition-shadow duration-300 ${
          scrollPosition > 24 ? "shadow-md" : "border-b border-gray-100"
        }`}
      >
        <div className="flex flex-row justify-between items-center">
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={Logo} alt="Logo" width={44} height={44} />
            <div className="hidden lg:flex flex-col leading-tight">
              <span className="text-primary-500 font-black text-xs tracking-widest uppercase">
                Caritas
              </span>
              <span className="text-gray-400 text-[10px] tracking-wide uppercase">
                Christian Elders Foundation
              </span>
            </div>
          </Link>

          <ul className="hidden md:flex flex-row lg:gap-8 gap-5 items-center">
            {navItems.map(({ id, label, link }) => {
              if (link === "/contactus") {
                return (
                  <Link
                    key={id}
                    to={link}
                    className="px-5 py-2 bg-primary-500 text-white rounded-lg text-sm font-semibold hover:bg-primary-100 hover:text-primary-500 transition-all duration-200"
                  >
                    {label}
                  </Link>
                );
              }
              return (
                <Link
                  key={id}
                  className={`${linkStyle} ${location.pathname === link ? activeStyle : ""}`}
                  to={link}
                >
                  <span>{label}</span>
                </Link>
              );
            })}
          </ul>

          <div className="flex items-center md:hidden">
            {isMobile ? (
              <X
                className="cursor-pointer"
                color="#1E514E"
                size={28}
                onClick={() => setIsMobile(false)}
              />
            ) : (
              <Menu
                className="cursor-pointer"
                color="#1E514E"
                size={28}
                onClick={openMenu}
              />
            )}
          </div>
        </div>

        {/* Mobile dropdown — absolute so it overlays the page without pushing content down */}
        <div
          className={`absolute top-full left-0 right-0 bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isMobile ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex py-6 flex-col gap-6 items-center">
            {navItems.map(({ id, label, link }) => (
              <li key={id} onClick={() => setIsMobile(false)}>
                <Link
                  to={link}
                  className={`${linkStyle} ${location.pathname === link ? activeStyle : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navigation;
