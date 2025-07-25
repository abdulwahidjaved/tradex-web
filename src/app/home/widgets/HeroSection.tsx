"use client"
import Link from 'next/link'
import Image from "next/image";
import { TextGenerateEffect } from "./../../../components/ui/text-generate-effect";

const words = "We Build, We Simulate, We Innovate.";

export default function HeroSection() {
    return (
        <>        <section className="min-h-max bg-white dark:bg-gray-950">
            <div className="absolute top-0 inset-x-0 h-64 flex items-start">
                <div className="h-24 w-2/3 bg-gradient-to-br from-purple-500 opacity-20 blur-2xl dark:from-purple-700 dark:invisible dark:opacity-40">
                </div>
                <div className="h-20 w-3/5 bg-gradient-to-r from-blue-600 opacity-40 blur-2xl dark:from-purple-700 dark:opacity-40">
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-purple-600 to-violet-400 rounded-full opacity-50 blur-2xl">
            </div>
            <div className="relative mx-auto pt-32 pb-24 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-10">
                {/* <h1 className="text-gray-900 dark:text-white mx-auto max-w-5xl font-bold text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight">
                    We Build, We Simulate, We Innovate.
                </h1> */}
                <TextGenerateEffect words={words} />
                <p className="text-gray-700 dark:text-gray-300 mx-auto max-w-2xl">
                    Experience a smarter way to trade. Our platform combines powerful tools, real-time simulations, and cutting-edge innovation to help you learn, test, and grow in today’s dynamic markets.
                </p>
                <div className="flex justify-center items-center flex-wrap mx-auto gap-4">
                    <Link
                        href="#"
                        className="flex items-center h-12 px-6 rounded-full bg-purple-600 text-white border border-purple-600 transition-transform duration-300 ease-in-out hover:-translate-y-1"
                    >
                        Explore
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center h-12 px-6 rounded-full bg-gray-100 dark:bg-gray-900 text-purple-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 transition-transform duration-300 ease-in-out hover:-translate-y-1"
                    >
                        Login
                    </Link>
                </div>

                <div className="text-left grid lg:grid-cols-3 p-6 rounded-2xl bg-gradient-to-tr from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 border border-gray-100 dark:border-gray-800 max-w-2xl lg:max-w-5xl mx-auto lg:divide-x divide-y lg:divide-y-0 divide-gray-300 dark:divide-gray-800">
                    <div className="flex items-start gap-6 lg:pr-6 pb-6 lg:pb-0">
                        <div className="w-10">
                            <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                                <Image
                                    src="/security.png" // replace with your actual image path
                                    alt="Icon"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </span>
                        </div>
                        <div className="flex-1 space-y-1">
                            <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                                Secure Transactions
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                All trades are protected with top-grade encryption.                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 lg:px-6 py-6 lg:py-0">
                        <div className="w-10">
                            <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                                <Image
                                    src="/simulation.png" // ✅ Place your image inside /public folder
                                    alt="Icon"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </span>
                        </div>
                        <div className="flex-1 space-y-1">
                            <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                                Real-Time Market Simulation
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Practice trading with live market movements.                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 pt-6 lg:pt-0 lg:pl-6">
                        <div className="w-10">
                            <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                                <Image
                                    src="/portfolio.png" // ✅ Place your image inside /public folder
                                    alt="Icon"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </span>
                        </div>
                        <div className="flex-1 space-y-1">
                            <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                                Smart Portfolio Insights
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Track and improve your virtual trade decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}