import Image from "next/image";

const testimonials = [
  {
    name: "Sophia Lee",
    role: "Founder, NovaTech",
    image: "/man.png",
    text: "Working with this team has been an absolute game-changer. Their professionalism and creative problem-solving exceeded our expectations.",
  },
  {
    name: "David Kim",
    role: "CTO, PixelCraft",
    image: "/man.png",
    text: "They deliver high-quality results quickly. We’ve seen a huge boost in our user engagement since launching our redesigned app.",
  },
  {
    name: "Emily Clark",
    role: "Marketing Head, Finovate",
    image: "/man.png",
    text: "We needed a tech partner who could think fast and execute faster. These folks did not disappoint — super responsive and talented.",
  },
  {
    name: "Ravi Patel",
    role: "Product Manager, DevNest",
    image: "/man.png",
    text: "They turned our vision into reality. The communication, attention to detail, and technical expertise were top-notch.",
  },
  {
    name: "Maria Gonzales",
    role: "CEO, Cloudio",
    image: "/man.png",
    text: "Their innovative approach gave our brand a modern edge. I would recommend them to anyone serious about digital transformation.",
  },
  {
    name: "Liam Johnson",
    role: "Founder, Flowlytics",
    image: "/man.png",
    text: "A dream team for any startup. Fast, flexible, and really understand user-first design. We’ll definitely work again together.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="max-w-2xl">
          <h1 className="font-bold text-gray-800 dark:text-white text-3xl">
            Client’s Say About Us
          </h1>
        </div>
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-5 md:p-6 space-y-6 rounded-lg bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900 shadow-2xl shadow-gray-100/70 dark:shadow-gray-800/80 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <p className="font-medium text-gray-700 dark:text-gray-300">
                {testimonial.text}
              </p>
              <div className="flex items-start gap-4">
                <Image
                  src={testimonial.image}
                  width={1900}
                  height={1200}
                  alt={`${testimonial.name} avatar`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="space-y-1 flex-1">
                  <h2 className="text-lg font-semibold leading-none text-gray-800 dark:text-gray-200">
                    {testimonial.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
