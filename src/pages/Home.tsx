import HomeBanner from "@/components/home/home-banner";
import AboutUsPreview from "@/components/about/about-preview";
import ServicesBanner from "@/components/home/services-banner";
import ProjectPreview from "@/components/project/project-preview";
import GalleryPreview from "@/components/gallery/gallery-preview";
import MembersPreview from "@/components/members/members-preview";
import PartnersBanner from "@/components/home/partners-banner";

const Home = () => {
  return (
    <main className={"flex flex-col gap-8"}>
      <section>
        <div className="flex flex-col text-center place-items-center">
          <p className="text-4xl md:text-8xl py-8 extrabold uppercase font-black mx-[5rem] text-gray-800">
            Caritas Christian{" "}
            <span className="text-primary text-4xl md:text-8xl tracking-wider text-primary-500">
              Elders Foundation
            </span>
          </p>
        </div>
      </section>

      <section>
        <HomeBanner />
      </section>

      <section>
        <AboutUsPreview />
      </section>

      <section>
        <ServicesBanner />
      </section>

      <section>
        <ProjectPreview />
      </section>

      <section>
        <GalleryPreview />
      </section>

      <section className={"bg-accent-100 pb-12"}>
        <MembersPreview />
      </section>

      <section>
        <PartnersBanner />
      </section>
    </main>
  );
};

export default Home;
