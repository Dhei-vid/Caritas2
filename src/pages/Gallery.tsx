import { useState } from "react";
import Label from "@/components/ui/label";
import { ImageDataList } from "@/common/constant";
import GalleryCard from "@/components/gallery/gallery-card";

const Gallery = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="p-12 md:px-20 px-5">
      <section className="grid md:grid-cols-2 gap-7 md:gap-0 mb-52 md:mb-0">
        <div>
          <Label label={`gallery`} />
          <h1 className="font-bold uppercase md:text-5xl text-4xl pb-3 pr-5 leading-normal">
            Every picture says a{" "}
            <span className="text-primary-500">thousand words</span>, so do ours.
          </h1>
          <p className="font-thin">
            See for yourself what we have been working on.
          </p>
        </div>
        <div className="relative">
          <img
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`absolute top-0 right-12 rounded-md z-10 w-[17rem] h-[17rem] duration-500 cursor-pointer ${
              isHover && "translate-x-12 rotate-12"
            }`}
            src={
              "https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2luZG5lc3N8ZW58MHx8MHx8fDA%3D"
            }
            alt=""
          />
          <img
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`absolute top-10 left-12 rounded-md z-20 w-[17rem] h-[17rem] duration-500 cursor-pointer ${
              isHover && "-translate-x-12 -rotate-12"
            }`}
            src={
              "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdvaW5nJTIwb3V0JTIwZm9yJTIwY2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D"
            }
            alt=""
          />
        </div>
      </section>

      <section>
        <div className="pt-36">
          <p className="text-center text-xl uppercase">
            <span className="text-primary-500 font-bold">Year</span> by{" "}
            <span className="text-primary-500 font-bold">year</span> we have
            organized our catalogue of activities
          </p>
        </div>
      </section>

      <section className="pt-5 pb-10">
        <Label label={"2021"} />
        <div className="md:columns-3 columns-1 gap-4">
          <div className="justify-center mb-4">
            {ImageDataList.map((image) => {
              return (
                <div key={image.id}>
                  <GalleryCard
                    imageLink={image.imageLink}
                    description={image.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="">
        <Label label={"2022"} />
        <div className="md:columns-3 columns-1 gap-4">
          <div className="justify-center mb-4">
            {ImageDataList.map((image) => {
              return (
                <div key={image.id}>
                  <GalleryCard
                    imageLink={image.imageLink}
                    description={image.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10">
        <Label label={"2023..."} />
        <div className="md:columns-3 columns-1 gap-4">
          {ImageDataList.map((image) => {
            return (
              <GalleryCard
                key={image.id}
                imageLink={image.imageLink}
                description={image.description}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
