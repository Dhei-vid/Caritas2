import { Outlet } from "react-router";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router";
import { navItems } from "@/common/constant";
// import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from 'react-icons/ri'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Outlet />
      <div
        className={
          "bg-cover bg-center bg-no-repeat bg-[url('@/assets/images/bg_image.png')] bg-primary-500 py-10 px-5 md:px-10"
        }
      >
        <div className={"grid md:grid-cols-7 grid-cols-2 md:p-5 h-[100%]"}>
          <div className={"flex flex-col col-span-3 gap-10"}>
            <p
              className={
                "text-accent-100 font-semibold uppercase text-primaryLGray text-3xl leading-[50px]"
              }
            >
              caritas christian elders{" "}
              <span
                className={
                  "font-bold text-[2rem] lg:text-[3.3rem] md:text-[2rem] tracking-widest"
                }
              >
                foundation
              </span>
            </p>
            <div className="flex gap-2 md:items-center">
              <Sparkles className={"text-gold"} />
              <p
                className={"font-semibold text-accent-100 text-sm md:text-base"}
              >
                Making a Difference, One Act of Kindness at a Time.
              </p>
            </div>
            {/* <ul className="flex flex-row gap-5">
              <li className="backdrop-blur bg-white/30 p-2 cursor-pointer transition duration-300 hover:scale-125">
                <RiInstagramFill color="white" size={25} />
              </li>
              <li className="backdrop-blur bg-white/30 p-2 cursor-pointer transition duration-300 hover:scale-125">
                <RiFacebookFill color="white" size={25} />
              </li>
              <li className="backdrop-blur bg-white/30 p-2 cursor-pointer transition duration-300 hover:scale-125">
                <RiLinkedinFill color="white" size={25} />
              </li>
              <li className="backdrop-blur bg-white/30 p-2 cursor-pointer transition duration-300 hover:scale-125">
                <RiYoutubeFill color="white" size={25} />
              </li>
            </ul> */}
          </div>

          <div className={"col-span-2 md:ml-20 py-12 md:p-0"}>
            <h1 className={"uppercase text-accent-100 font-bold text-lg pb-5"}>
              Quick Links
            </h1>
            <ul className="flex flex-col gap-4">
              {navItems.map(({ id, label, link }) => (
                <li key={id} onClick={() => navigate(link)}>
                  <span
                    className={
                      "text-accent-100 hover:text-gold transition duration-300 text-base font-bold cursor-pointer"
                    }
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 md:pl-10 py-12 md:p-0">
            <p className={"uppercase font-bold text-lg text-accent-100"}>
              For Donations
            </p>
          </div>
        </div>

        <div className={"border-t-[1px] border-white p-5"}>
          <p className={"text-gold text-center font-thin"}>
            &copy; All rights reserved - HAID Technologies
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
