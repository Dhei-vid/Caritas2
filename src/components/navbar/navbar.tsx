import { useEffect, useState, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router";
import CustomButton from "../custom/button";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/icon/CCEF-logo.svg";
import { navItems } from "@/common/constant";

const Navigation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const newRef = useRef(null);

  // Function to update scroll position
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const openMenu = () => {
    setIsMobile(true);
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };

  const closeMenu = () => {
    setIsMobile(false);
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // active style
  const activeStyle = `text-primary-500 after:scale-x-110`;

  return (
    <>
      {/* --- web navigation --- */}
      <nav
        className={`p-5 lg:px-20 sticky top-0 bg-white z-50 ${
          scrollPosition <= 24 ? "" : "shadow-md"
        }`}
      >
        <div className="flex flex-row justify-between">
          <img src={Logo} alt="Logo" width={50} height={50} />

          <ul className="hidden md:flex flex-col md:flex-row lg:gap-7 gap-5 items-center">
            {navItems.map(({ id, label, link }) => (
              <Link
                key={id}
                className={`text-gray-800 ${
                  location.pathname === link ? activeStyle : ""
                } font-semibold cursor-pointer hover:text-primary-500 relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary-500 after:w-full after:scale-x-0 after:hover:scale-x-110 after:transition after:duration-300 after:origin-center`}
                to={link}
              >
                <span>{label}</span>
              </Link>
            ))}

            <CustomButton title={"Donate"} onClick={() => {}} />
          </ul>

          {/* --- mobile button --- */}
          <div className="flex items-center md:hidden">
            {isMobile ? (
              <X
                className={"cursor-pointer"}
                color="#1E514E"
                size={30}
                onClick={closeMenu}
              />
            ) : (
              <Menu
                className={"cursor-pointer"}
                color="#1E514E"
                size={30}
                onClick={openMenu}
              />
            )}
          </div>
        </div>
      </nav>
      {/* mobile navigation */}
      {isMobile && (
        <div className="px-0 bg-white z-50 shadow-md" ref={newRef}>
          <ul className="flex py-5 flex-col gap-7 items-center">
            <li
              className={`text-gray-800 ${
                location.pathname === "/" ? activeStyle : ""
              } cursor-pointer hover:text-primary-500 relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary-500 after:w-full after:scale-x-0 after:hover:scale-x-110 after:transition after:duration-300 after:origin-center`}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className={`${
                location.pathname === "/aboutus" ? activeStyle : ""
              } text-gray-800 hover:text-primary relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-110 after:transition after:duration-300 after:origin-center`}
            >
              <Link to={"/aboutus"}>About Us</Link>
            </li>
            <li
              className={`${
                location.pathname === "/projects" ? activeStyle : ""
              } text-gray-800 hover:text-primary relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-110 after:transition after:duration-300 after:origin-center`}
            >
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li
              className={`${
                location.pathname === "/members" ? activeStyle : ""
              } text-gray-800 hover:text-primary relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-110 after:transition after:duration-300 after:origin-center`}
            >
              <Link to={"/members"}>Members</Link>
            </li>
            <li
              className={`${
                location.pathname === "/gallery" ? activeStyle : ""
              } text-gray-800 hover:text-primary relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-110 after:transition after:duration-300 after:origin-center`}
            >
              <Link to={"/gallery"}>Gallery</Link>
            </li>
            <li
              className={`${
                location.pathname === "/contactus" ? activeStyle : ""
              } text-gray-800 hover:text-primary relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-110 after:transition after:duration-300 after:origin-center`}
            >
              <Link to={"/contactus"}>Contact Us</Link>
            </li>
            <CustomButton title={"Donate"} onClick={() => {}} />

            <li
              className={`${
                location.pathname === "/admin" ? activeStyle : ""
              } text-gray-800 hover:text-primary relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-110 after:transition after:duration-300 after:origin-center`}
            >
              <Link to={"/admin"}>Admin</Link>
            </li>
          </ul>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Navigation;
