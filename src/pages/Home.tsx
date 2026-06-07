import HomeBanner from "@/components/home/home-banner";
import AboutUsPreview from "@/components/about/about-preview";
import Slogan from "@/components/about/slogan";
import ServicesBanner from "@/components/home/services-banner";
import ProjectPreview from "@/components/project/project-preview";
import GalleryPreview from "@/components/gallery/gallery-preview";
import MembersPreview from "@/components/members/members-preview";

const Home = () => {
  return (
    <main className="flex flex-col">
      <HomeBanner />
      <AboutUsPreview />
      <ServicesBanner />
      <ProjectPreview />
      <GalleryPreview />
      <MembersPreview />
      <Slogan />
    </main>
  );
};

export default Home;
