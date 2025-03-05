import SectionTitle from "../home/section-title.";
import { Music } from "lucide-react";

const Anthem = () => {
  return (
    <div className={"relative py-12"}>
      <SectionTitle
        title={"Caritas Elder's Anthem"}
        subTitle={"ZEAL FOR THE LORD"}
      />

      <div className={"px-5 lg:px-[15rem]"}>
        <div>
          <p className={"text-lg font-bold text-primary-500 pb-5"}>Chorus:</p>

          <div className={"flex flex-col gap-2"}>
            <p className={"text-lg"}>Caritas, Caritas</p>
            <p className={"text-lg"}>Christian, Christian</p>
            <p className={"text-lg"}>Christian Elders Foundation.</p>
          </div>
        </div>

        <div className={"py-8 flex flex-col gap-4 items-center justify-center"}>
          <p className={"text-lg"}>
            Zeal for the house of the Lord our God. Zeal for His Name - His Holy
            Name. Zeal for the Author of our Faith. Zeal for the one who wrought
            our Salvation.
          </p>
          <p className={"text-lg"}>
            Hear the voice of the Lord our God With love, faith and hope respond
            Little efforts, the Lord multiplies One Lord, one Faith, one
            Baptism.
          </p>
        </div>
      </div>

      <div className={"absolute top-[30%] lg:right-[20%] right-0"}>
        <Music size={30} className={"text-gold"} />
        <Music size={50} className={"text-gold"} />
        <Music size={70} className={"text-gold"} />
      </div>
    </div>
  );
};

export default Anthem;
