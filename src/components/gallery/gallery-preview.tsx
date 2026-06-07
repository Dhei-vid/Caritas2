import { useNavigate } from "react-router";
import Label from "@/components/ui/label";
import { ImageDataList } from "@/common/constant";
import CustomButton from "../custom/button";

const GalleryPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="px-5 md:px-20 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <Label label="gallery" />
          <h2 className="font-black uppercase text-3xl md:text-4xl text-gray-800 leading-tight mt-1">
            See what we've{" "}
            <span className="text-primary-500">been up to</span>.
          </h2>
        </div>
        <p className="text-gray-500 max-w-xs md:text-right text-sm leading-relaxed">
          A glimpse into the communities we serve and the lives we touch.
        </p>
      </div>

      <div className="columns-2 md:columns-3 gap-3">
        {ImageDataList.slice(3).map((item) => (
          <div key={item.id} className="mb-3 break-inside-avoid">
            <img
              src={item.imageLink}
              alt={item.description}
              className="w-full rounded-xl object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <CustomButton
          title="See full gallery"
          onClick={() => navigate("gallery")}
          style="p-5 px-8"
        />
      </div>
    </section>
  );
};

export default GalleryPreview;
