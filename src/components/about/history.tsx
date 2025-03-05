import { caritasHistory } from "@/common/constant";

const History = () => {
  return (
    <div>
      <ol className="relative border-s border-primary-500">
        {caritasHistory
          .filter((items) => items.display)
          .map((items) => (
            <li key={items.id} className="mb-10 ms-12">
              <span className="absolute flex items-center justify-center w-6 h-6 -start-6 md:-start-8 bg-accent rounded-full w-6 h-6 p-6 md:p-8 font-bold text-primary-500 text-xs md:text-sm text-center">
                {items.timeline}
              </span>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-xs dark:bg-primary-500">
                <div className="items-center mb-3 sm:flex">
                  <div className="text-base uppercase font-semibold text-accent-100">
                    {items.title}
                  </div>
                </div>
                <div className="p-3 text-base font-normal text-accent-100 border border-accent rounded-lg dark:bg-primary-500">
                  {items.paragraph}
                </div>
              </div>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default History;
