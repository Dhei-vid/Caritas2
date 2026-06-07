import SectionTitle from "../home/section-title.";
import {
  Heart,
  Star,
  Shield,
  Flame,
  Gift,
  Lightbulb,
  Leaf,
} from "lucide-react";

const values = [
  {
    id: 1,
    Icon: Heart,
    title: "Honesty",
    value: "We act with transparency and integrity in all that we do.",
  },
  {
    id: 2,
    Icon: Star,
    title: "Sincerity",
    value: "Our commitment to service comes from a genuine place of care.",
  },
  {
    id: 3,
    Icon: Shield,
    title: "Commitment",
    value:
      "We take responsibility and believe that where there is a will, there is a way.",
  },
  {
    id: 4,
    Icon: Flame,
    title: "Persistence",
    value:
      "We are deeply passionate about our work and push through every challenge.",
  },
  {
    id: 5,
    Icon: Gift,
    title: "Selflessness",
    value:
      "We give freely of our time and resources for the good of others.",
  },
  {
    id: 6,
    Icon: Lightbulb,
    title: "Innovative",
    value:
      "We seek new and better ways to reach and serve our communities.",
  },
  {
    id: 7,
    Icon: Leaf,
    title: "Sustainability",
    value:
      "We build programs and projects that create lasting, long-term impact.",
  },
];

const CoreValues = () => {
  return (
    <div>
      <SectionTitle
        title="Our Core Values"
        subTitle="It takes great people to make a great organization. Our team members embody these CCEF values."
      />

      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:px-20 px-5">
        {values.map(({ id, Icon, title, value }) => (
          <div
            key={id}
            className="flex flex-col gap-3 bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary-100 transition-all duration-200"
          >
            <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
              <Icon className="text-primary-500" size={20} />
            </div>
            <p className="font-bold text-gray-800">{title}</p>
            <p className="text-sm text-gray-500 leading-relaxed">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
