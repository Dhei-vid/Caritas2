import Label from "@/components/ui/label";
import Anthem from "@/components/about/anthem";
import History from "@/components/about/history";
import Vision from "@/components/about/vision";
import Mission from "@/components/about/mission";
import CoreValues from "@/components/about/core-values";
import ServicesBanner from "@/components/home/services-banner";
import SectionTitle from "@/components/home/section-title.";

const AboutUs = () => {
  return (
    <div className={"w-full"}>
      <section className="grid md:grid-cols-2 md:p-12 p-6 md:px-20 px:5 gap-5 md:gap-0">
        <div>
          <Label label={`about us`} />
          <h1 className="font-bold md:leading-normal leading-normal tracking-wide uppercase text-3xl md:text-4xl lg:text-5xl pb-3">
            Get to know more about{" "}
            <span className="text-primary">caritas foundation</span>.
          </h1>
          <p className="font-thin">
            Read about our history, motivation, and ambition to continue to
            serve.
          </p>
        </div>
        <div className="">
          <div className="absolute">
            <img
              className="rounded-full w-[15rem] h-[16rem] lg:w-[23rem] lg:h-[23rem] object-cover"
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="relative w-fit md:top-[60%] top-[80%] md:left-[35%] left-[30%] w-[15rem] md:w-[18rem]">
            <img
              className="rounded-full w-[12rem] lg:w-[18rem] h-[12rem] lg:h-[18rem] object-cover bg-white p-2"
              src="https://images.unsplash.com/photo-1582079768266-e65af1ad8d3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlYWR8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="md:px-20 px-5 md:pt-14 pt-52">
        <Label label={"our history"} style={"text-center my-5"} />

        <div className="px-2 flex items-center justify-center">
          <History />
        </div>
      </section>

      <section className="md:px-20 px-5">
        <Label label={"who we are"} style={"text-center my-5"} />
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5">
          <div>
            <img
              className="hidden md:block rounded-md"
              src="https://images.unsplash.com/photo-1699190375905-3cac33bbdbb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
              alt="An image of cubes"
            />
          </div>
          <div>
            <div className="flex md:py-3">
              <span className="text-primary text-xl font-bold">01</span>
              <p className="tracking-wide px-10">
                We are a diverse group of volunteers inspired by the Catholic
                Faith working at the grassroots of some parishes in Uyo Catholic
                Diocese.
              </p>
            </div>

            <div className="flex py-3">
              <span className="text-primary text-xl font-bold">02</span>
              <p className="tracking-wide px-10">
                We are the helping hands of the church, reaching out to the
                poor, vulnerable and excluded regardless of race, tribe,
                religion to build a world based on equity, justice and fraternal
                love.
              </p>
            </div>

            <div className="flex py-3">
              <span className="text-primary text-xl font-bold">03</span>
              <p className="tracking-wide px-10">
                Working to establish Catholic Communities one at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12">
        <ServicesBanner />
      </div>

      <div>
        <CoreValues />
      </div>

      <div className="py-10 md:px-32 px-5 gap-5">
        <SectionTitle
          title={"Our Guiding Principles"}
          subTitle="This unites us around a single purpose."
        />

        <div className="grid md:grid-cols-2 gap-5">
          <Vision
            visionStatement={
              "To Be One Of The World’s Leading Catholic Charity Organizations Helping Parishes Attain Their Set Goals Both In Physical Development And In Evangelization."
            }
          />
          <Mission
            missionStatement={
              "To Provide Assistance In The Advancement Of The Catholic Faith To Where It Previously Did Not Reach."
            }
          />
        </div>

        <Anthem />
      </div>
    </div>
  );
};

export default AboutUs;
