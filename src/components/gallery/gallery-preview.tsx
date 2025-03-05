import { useNavigate } from "react-router";
import SectionTitle from "../home/section-title.";
import { ImageDataList } from "@/common/constant";
import CustomButton from "../custom/button";

const GalleryPreview = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("gallery");
  };

  return (
    <div className={"flex flex-col gap-5 items-center justify-center"}>
      <SectionTitle
        title={"GALLERY"}
        subTitle={"See for yourself what we have been up to."}
      />

      <div className="md:columns-3 px-12 justify-stretch gap-3">
        {ImageDataList.slice(3).map((items) => {
          return (
            <div className="justify-center mb-3" key={items.id}>
              <div>
                <img
                  src={items.imageLink}
                  alt={items.description}
                  className={"w-full aspect-ratio rounded-lg"}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className={"py-12"}>
        <CustomButton
          title={"See More"}
          onClick={handleNavigation}
          style={"p-5"}
        />
      </div>
    </div>
  );
};

export default GalleryPreview;
