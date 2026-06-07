import { Link } from "react-router";
import { Heart, BookOpen, Droplets, House, Clock } from "lucide-react";
import Label from "@/components/ui/label";
import { projects, corporateCharity } from "@/common/projects";

const causes = [
  {
    Icon: House,
    title: "Church Building",
    description:
      "Help complete places of worship for rural communities across Akwa Ibom State, giving congregations a permanent home to gather and grow.",
  },
  {
    Icon: BookOpen,
    title: "Education & Seminary",
    description:
      "Support seminarians and students through scholarships and bursaries, nurturing the next generation of Catholic leaders and scholars.",
  },
  {
    Icon: Droplets,
    title: "Water Projects",
    description:
      "Fund borehole construction and clean water access for underserved communities, reducing water-borne illness and improving daily life.",
  },
  {
    Icon: Heart,
    title: "Health & Welfare",
    description:
      "Provide medical assistance and welfare support to the sick, elderly, and vulnerable members of our communities.",
  },
];

const Donate = () => {
  const allProjects = [...projects, ...corporateCharity];
  const communitiesReached = new Set(allProjects.map((p) => p.community)).size;
  const completedProjects = allProjects.filter((p) => !p.inProgress).length;
  const totalDisbursed = allProjects.reduce((sum, p) => sum + (p.amount ?? 0), 0);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-accent-100">
        <div className="grid md:grid-cols-2 md:px-20 px-5 py-16 gap-10 items-center">
          <div>
            <Label label="make a difference" />
            <h1 className="font-black leading-tight uppercase text-3xl md:text-5xl pb-4 text-gray-800">
              Your generosity{" "}
              <span className="text-primary-500">changes lives</span>.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Every gift, large or small, goes directly to communities across
              Akwa Ibom State — funding church buildings, clean water, education,
              and health care for those who need it most.
            </p>
            <div className="mt-8">
              <a
                href="#account-info"
                className="inline-block bg-primary-500 text-accent-100 font-semibold uppercase px-8 py-3 rounded-lg hover:bg-primary-100 hover:text-primary-500 transition-all duration-200"
              >
                Donate Now
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              className="w-full h-[26rem] object-cover rounded-2xl shadow-lg"
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=70"
              alt="Community members helping each other"
            />
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="bg-[url('@/assets/images/bg_image.png')] bg-cover bg-center bg-primary-500 grid grid-cols-3 gap-1 px-5 py-16 md:px-12">
        {[
          { value: `${communitiesReached}+`, label: "Communities Reached" },
          { value: `${completedProjects}+`, label: "Projects Completed" },
          {
            value: `₦${(totalDisbursed / 1_000_000).toFixed(1)}M+`,
            label: "Total Disbursed",
          },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 py-4">
            <p className="text-white font-black text-3xl md:text-5xl">{value}</p>
            <p className="text-accent-100 text-center text-xs md:text-sm tracking-wide uppercase">
              {label}
            </p>
          </div>
        ))}
      </section>

      {/* What you support */}
      <section className="md:px-20 px-5 py-16">
        <Label label="where your money goes" />
        <h2 className="font-black uppercase text-2xl md:text-3xl text-gray-800 mb-10">
          Every donation is put to work
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {causes.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-5 items-start border border-gray-100 rounded-2xl p-6 shadow-sm bg-white"
            >
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="text-primary-500" size={22} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-base mb-1">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Account information */}
      <section
        id="account-info"
        className="md:px-20 px-5 py-16 bg-accent-100"
      >
        <Label label="account information" />
        <h2 className="font-black uppercase text-2xl md:text-3xl text-gray-800 mb-10">
          How to donate
        </h2>

        <div className="max-w-2xl">
          <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm flex flex-col items-center text-center gap-5">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center">
              <Clock className="text-primary-500" size={30} />
            </div>
            <div>
              <h3 className="font-black text-gray-800 text-xl uppercase mb-2">
                Account Details Coming Soon
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                We are in the process of setting up our official donation
                account. In the meantime, please reach out to us directly to
                arrange your gift.
              </p>
            </div>
            <Link
              to="/contactus"
              className="inline-block bg-primary-500 text-accent-100 font-semibold uppercase px-8 py-3 rounded-lg hover:bg-primary-100 hover:text-primary-500 transition-all duration-200 text-sm"
            >
              Contact us to donate
            </Link>
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="md:px-20 px-5 py-16">
        <div className="bg-primary-500 bg-[url('@/assets/images/bg_image.png')] bg-cover bg-center rounded-2xl px-8 py-14 flex flex-col items-center text-center gap-5">
          <h2 className="font-black uppercase text-2xl md:text-4xl text-accent-100 leading-tight">
            Together, we can do more
          </h2>
          <p className="text-accent-100/80 max-w-lg text-sm md:text-base leading-relaxed">
            Caritas Christian Elders Foundation has been making a difference in
            Akwa Ibom State since 2006. Join us in continuing that legacy of
            faith, love, and service.
          </p>
          <Link
            to="/contactus"
            className="inline-block bg-gold text-primary-500 font-semibold uppercase px-8 py-3 rounded-lg hover:bg-accent-100 transition-all duration-200 text-sm"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Donate;
