import SectionTitle from "../home/section-title.";

const values = [
  {
    id: 1,
    icon: "✨",
    title: "Honesty",
    value: "Discover how we put our team at the heart and support each other.",
  },
  {
    id: 2,
    icon: "✈️",
    title: "Sincerity",
    value:
      "We're brave and always trying new things to see what we can discover.",
  },
  {
    id: 3,
    icon: "🍀",
    title: "Commitment",
    value:
      "We take responsibility and understand and understand that where there is a will, there is a way.",
  },
  {
    id: 4,
    icon: "👾",
    title: "Persistence",
    value:
      "We are deeply passionate about our work, and this profound love for what we do.",
  },
  {
    id: 5,
    icon: "💎",
    title: "Selfless",
    value:
      "We are deeply passionate about our work, and this profound love for what we do.",
  },
  {
    id: 6,
    icon: "✈️",
    title: "Innovative",
    value:
      "We're brave and always trying new things to see what we can discover.",
  },
  {
    id: 7,
    icon: "✈️",
    title: "Sustainability",
    value:
      "We're brave and always trying new things to see what we can discover.",
  },
];

const CoreValues = () => {
  return (
    <div>
      <SectionTitle
        title={"Our Core Values"}
        subTitle="It takes great people to make a great product. Our company culture
          champions diversity and our team members embody CCEF values."
      />

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:px-32 px-10">
        {values.map((value) => {
          return (
            <div
              key={value.id}
              className="flex flex-col gap-3 text-center bg-accent-100 p-10 rounded-lg"
            >
              {/* <div>{value.icon}</div> */}
              <p className="font-bold">{value.title}</p>
              {/* <p>{value.value}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreValues;
