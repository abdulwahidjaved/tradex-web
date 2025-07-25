// components/MetricsSection.tsx
"use client"
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type MetricItem = {
  value: string;
  label: string;
};

const metrics: MetricItem[] = [
  { value: "2 Years", label: "Experiences" },
  { value: "4k", label: "Projects" },
  { value: "95%", label: "Satisfaction" },
  { value: "+2k", label: "Clients" },
];



const MetricCard = ({ value, label }: MetricItem) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  // Convert "4k", "+2k", "95%" -> 4000, 2000, 95
  const parsedValue = parseFloat(value.replace(/[^\d.]/g, ""));
  const hasK = /k/i.test(value);
  const hasPlus = value.includes("+");
  const hasPercent = value.includes("%");

  let displayValue = parsedValue;
  if (hasK) displayValue *= 1000;
  if (hasPlus) displayValue += 0; // just show '+' as suffix

  const suffix = value.replace(/[\d.]/g, "").replace(/^k/i, "k");

  return (
    <div
      ref={ref}
      className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-100/80 dark:border-gray-900/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700 dark:text-gray-300"
    >
      <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
        {inView ? (
          <CountUp end={displayValue} duration={2} separator="," />
        ) : (
          0
        )}
        {hasPercent && "%"}
        {hasK && "k"}
        {hasPlus && "+"}
      </span>
      <span>{label}</span>
    </div>
  );
};


const MetricsSection = () => {
  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-6">
        {metrics.map((item, index) => (
          <MetricCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default MetricsSection;
