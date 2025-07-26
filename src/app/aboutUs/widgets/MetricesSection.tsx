'use client';

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type Metric = {
  value: number;
  label: string;
  suffix?: string;
};

const metrics: Metric[] = [
  { value: 4, label: 'Years Experience' },
  { value: 20, label: 'Projects Achieved', suffix: '+' },
  { value: 95, label: 'Client Satisfaction', suffix: '%' },
  { value: 14, label: 'Happy Clients' },
];

const MetricsSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
        {/* Heading */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">
            Our Achievements
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            From empowering thousands of users to simulate real-time trades to earning top ratings for innovation — we're proud of the milestones that shape our journey in virtual trading excellence.          </p>
        </div>

        {/* Metrics */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 dark:divide-gray-900">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="space-y-4 text-center py-4 sm:py-0 last:border-b-0"
            >
              <h2 className="text-gray-900 dark:text-white font-semibold text-3xl">
                {inView ? (
                  <CountUp
                    end={metric.value}
                    duration={2}
                    suffix={metric.suffix || ''}
                  />
                ) : (
                  '0'
                )}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
