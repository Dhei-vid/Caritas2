import { FC } from "react";

interface ISectionTitle {
  title: string;
  subTitle?: string;
}

const SectionTitle: FC<ISectionTitle> = ({ title, subTitle }) => {
  return (
    <div className={"flex flex-col items-center py-10 pt-20"}>
      <p className="uppercase text-primary text-2xl font-black text-center tracking-widest font-black uppercase text-4z pb-3">
        {title}
      </p>
      <p className="text-lg text-center px-5 md:px-24 lg:px-32">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
