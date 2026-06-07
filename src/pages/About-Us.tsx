import Label from "@/components/ui/label";
import Anthem from "@/components/about/anthem";
import Slogan from "@/components/about/slogan";
import History from "@/components/about/history";
import Vision from "@/components/about/vision";
import Mission from "@/components/about/mission";
import CoreValues from "@/components/about/core-values";
import ServicesBanner from "@/components/home/services-banner";
import SectionTitle from "@/components/home/section-title.";

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-accent-100">
        <div className="grid md:grid-cols-2 md:px-20 px-5 py-16 gap-10 items-center">
          <div>
            <Label label="about us" />
            <h1 className="font-black leading-tight uppercase text-3xl md:text-5xl pb-4 text-gray-800">
              Get to know more about{" "}
              <span className="text-primary-500">Caritas Foundation</span>.
            </h1>
            <p className="text-gray-500 text-lg">
              Read about our history, motivation, and ambition to continue to
              serve.
            </p>
          </div>
          <div className="hidden md:block">
            <img
              className="w-full h-[26rem] object-cover rounded-2xl shadow-lg"
              src="https://images.unsplash.com/photo-1582079768266-e65af1ad8d3a?w=800&auto=format&fit=crop&q=70"
              alt="Community service"
            />
          </div>
        </div>
      </section>

      {/* History */}
      <section className="md:px-20 px-5 py-16">
        <Label label="our history" style="text-center" />
        <div className="flex items-start justify-center mt-6">
          <History />
        </div>
      </section>

      {/* Who we are */}
      <section className="md:px-20 px-5 py-10 bg-accent-100">
        <Label label="who we are" />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-4">
          <div className="hidden md:block">
            <img
              className="rounded-2xl w-full h-full object-cover shadow"
              src="https://images.unsplash.com/photo-1699190375905-3cac33bbdbb1?w=600&auto=format&fit=crop&q=60"
              alt="An image of cubes"
            />
          </div>
          <div className="flex flex-col gap-6 justify-center">
            {[
              "We are a diverse group of volunteers inspired by the Catholic Faith working at the grassroots of some parishes in Uyo Catholic Diocese.",
              "We are the helping hands of the church, reaching out to the poor, vulnerable and excluded regardless of race, tribe, or religion to build a world based on equity, justice and fraternal love.",
              "Working to establish Catholic Communities one at a time.",
            ].map((text, i) => (
              <div key={i} className="flex gap-5 items-start">
                <span className="text-primary-500 text-2xl font-black flex-shrink-0 leading-none">
                  0{i + 1}
                </span>
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-6">
        <ServicesBanner />
      </div>

      <div>
        <CoreValues />
      </div>

      <div className="py-10 md:px-20 px-5 gap-5">
        <SectionTitle
          title="Our Guiding Principles"
          subTitle="This unites us around a single purpose."
        />

        <div className="grid md:grid-cols-2 gap-5">
          <Vision
            visionStatement="To be the global leading lay Catholic charity organization, supporting emergency relief, health, safety, and human capacity development."
          />
          <Mission
            missionStatement="To provide core values of Catholic Education and mission to where the Catholic Faith is non-existent, and to reach out to the poor, the marginalized, and the vulnerable."
          />
        </div>

        <Anthem />
      </div>

      <Slogan />
    </div>
  );
};

export default AboutUs;
