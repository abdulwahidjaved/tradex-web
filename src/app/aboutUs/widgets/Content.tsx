import Image from "next/image"

const ContentSection = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
                <div className="md:w-1/2 space-y-12 text-gray-700 dark:text-gray-300">
                    <h1 className="text-gray-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
                        We help you trade smarter, faster, and more confidently
                    </h1>
                    <p>
                        Experience seamless virtual trading like never before. With real-time market simulations, powerful tools, and intuitive dashboards, we empower every trader to build confidence, sharpen strategy, and grow faster in a risk-free environment.                </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Real-Time Collaboration
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Smart Analytics Dashboard
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            AI-Powered Recommendations
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Secure User Authentication
                        </li>
                        <li className="flex items-center gap-x-4">
                            <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-700 dark:bg-emerald-600 text-white">✓</span>
                            Fully Responsive Design
                        </li>
                    </ul>
                </div>
                <div className="flex md:flex-1">
                    <Image src="/aboutImage.png" alt="working on housing" width={1300} height={900} className="w-full md:h-full object-cover rounded-lg" />
                </div>
            </div>
        </section>
    )
}
export default ContentSection;