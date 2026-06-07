import { Outlet } from "react-router";
import { Sparkles } from "lucide-react";
import { Link } from "react-router";
import { navItems } from "@/common/constant";

const Footer = () => {
  return (
    <>
      <Outlet />
      <div
        className={
          "bg-cover bg-center bg-no-repeat bg-[url('@/assets/images/bg_image.png')] bg-primary-500 py-12 px-5 md:px-10"
        }
      >
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:p-5">
          <div className="flex flex-col gap-6">
            <p className="text-accent-100 font-semibold uppercase text-3xl leading-snug">
              Caritas Christian Elders{" "}
              <span className="font-bold text-4xl tracking-widest">
                Foundation
              </span>
            </p>
            <div className="flex gap-2 items-center">
              <Sparkles className="text-gold flex-shrink-0" />
              <p className="font-semibold text-accent-100 text-sm md:text-base">
                Making a Difference, One Act of Kindness at a Time.
              </p>
            </div>
          </div>

          <div>
            <h2 className="uppercase text-accent-100 font-bold text-lg pb-5">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-4">
              {navItems.map(({ id, label, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    className="text-accent-100 hover:text-gold transition duration-300 text-base font-semibold cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="uppercase font-bold text-lg text-accent-100 pb-5">
              Get Involved
            </h2>
            <p className="text-accent-100 text-sm leading-relaxed mb-4">
              We welcome partnerships and donations from individuals and
              organizations who share our mission of service.
            </p>
            <Link
              to="/contactus"
              className="inline-block text-gold font-semibold hover:text-accent-100 transition duration-300 text-sm"
            >
              Contact us to learn more →
            </Link>
          </div>
        </div>

        <div className="border-t border-white/30 mt-10 pt-6">
          <p className="text-gold text-center font-thin text-sm">
            &copy; {new Date().getFullYear()} Caritas Christian Elders Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
