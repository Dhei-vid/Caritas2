import { FC } from "react";

interface ISectionTitle {
  title: string;
  subTitle?: string;
}

const SectionTitle: FC<ISectionTitle> = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center py-10 pt-20">
      <p className="uppercase text-primary-500 text-3xl font-black text-center tracking-widest pb-2">
        {title}
      </p>
      <div className="h-1 w-14 bg-primary-500 rounded-full mb-4" />
      <p className="text-lg text-center px-5 md:px-24 lg:px-32 text-gray-500">
        {subTitle}
      </p>
    </div>
  );
};

export default SectionTitle;
