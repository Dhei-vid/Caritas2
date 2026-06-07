import { caritasHistory } from "@/common/constant";

const History = () => {
  return (
    <div className="w-full max-w-3xl">
      <ol className="relative border-s-2 border-primary-100 ms-4">
        {caritasHistory
          .filter((item) => item.display)
          .map((item) => (
            <li key={item.id} className="mb-10 ms-10">
              <span className="absolute flex items-center justify-center -start-7.5 bg-primary-500 rounded-full w-14 h-14 font-bold text-white text-xs text-center leading-tight p-1">
                {item.timeline}
              </span>
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <p className="text-base font-bold text-primary-500 mb-2">
                  {item.title}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.paragraph}
                </p>
              </div>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default History;
