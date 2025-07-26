'use client';
import React from 'react';

type PricingPlan = {
  id: number;
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    title: 'Basic Plan',
    price: '$19/month',
    features: ['Feature One', 'Feature Two', 'Feature Three'],
  },
  {
    id: 2,
    title: 'Pro Plan',
    price: '$49/month',
    features: ['Everything in Basic', 'Feature Four', 'Feature Five'],
    popular: true,
  },
  {
    id: 3,
    title: 'Enterprise',
    price: 'Contact Us',
    features: ['All Features', 'Custom Integrations', 'Premium Support'],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="flex flex-col space-y-12">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Choose the plan that fits your needs
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Simple pricing plans for every stage of your business. Upgrade or downgrade anytime.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map(({ id, title, price, features, popular }) => (
              <div
                key={id}
                className={`relative p-8 border rounded-2xl shadow-sm transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl ${
                  popular
                    ? 'border-blue-600 dark:border-blue-500 bg-blue-50/20 dark:bg-blue-950/10'
                    : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'
                }`}
              >
                {popular && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">{price}</p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 text-green-500"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full py-2 text-center rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
