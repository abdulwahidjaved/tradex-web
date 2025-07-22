'use client';

import React from 'react';

type Metric = {
  value: string;
  label: string;
};

const metrics: Metric[] = [
  { value: '4 Years', label: 'Experiences' },
  { value: '+20 Projects', label: 'Achieved' },
  { value: '95%', label: 'Satisfaction' },
  { value: '14', label: 'Clients' },
];

const MetricsSection: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">
            Title
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 dark:divide-gray-900">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="space-y-4 text-center py-4 sm:py-0 last:border-b-0"
            >
              <h2 className="text-gray-900 dark:text-white font-semibold text-3xl">
                {metric.value}
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
