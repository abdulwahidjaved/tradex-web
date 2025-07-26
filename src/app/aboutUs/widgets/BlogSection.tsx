'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";

type PublishedDate = {
  day: string;
  month: string;
};

type BlogPost = {
  id: number;
  cover: string;
  published_date: PublishedDate;
  category?: string;
  author?: string;
  title?: string;
};

type BlogCardProps = {
  cover: string;
  published_date: PublishedDate;
  category?: string;
  author?: string;
  title?: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ cover, published_date, category, author, title }) => {
  return (
    <div className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-200/50 dark:border-gray-800/50 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
      <Image
        src={cover}
        alt={title || 'Blog image'}
        width={1300}
        height={1400}
        className="w-full aspect-[5/3] object-cover bg-gray-100 dark:bg-gray-900"
      />
      <div className="relative p-4 pt-10">
        <div className="absolute right-4 -top-8 bg-blue-600 px-4 py-0.5 flex flex-col">
          <p className="font-bold text-2xl text-white">{published_date.day}</p>
          <p className="text-sm text-gray-200">{published_date.month}</p>
        </div>
        {(category || author) && (
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            {category && <span>{category}</span>}
            {category && author && (
              <span className="relative px-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:h-3 before:w-px before:bg-gray-400" />
            )}
            {author && <span>{author}</span>}
          </div>
        )}
        {title && (
          <h1 className="text-xl my-6 font-semibold text-gray-900 dark:text-white">{title}</h1>
        )}
        {/* <Link
          href="#"
          className="text-blue-600 dark:text-blue-500 transition hover:text-opacity-90 flex items-center gap-x-3 group"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 transition-all ease-linear group-hover:ml-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Link> */}
      </div>
    </div>
  );
};

const posts: BlogPost[] = [
  {
    id: 1,
    cover: "/trading.png",
    published_date: {
      day: "10",
      month: "May",
    },
    category: "categoryName",
    author: "John Doe",
    title: "Here are some good ways to write type-safe support attacks.",
  },
  {
    id: 2,
    cover: "/trading.png",
    published_date: {
      day: "10",
      month: "May",
    },
    category: "categoryName",
    author: "John Doe",
    title: "Here are some good ways to write type-safe support attacks.",
  },
  {
    id: 3,
    cover: "/trading.png",
    published_date: {
      day: "10",
      month: "May",
    },
    category: "categoryName",
    author: "John Doe",
    title: "Here are some good ways to write type-safe support attacks.",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">
            Our most recent Articles
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Stay updated with expert insights, trading tips, and market strategies — all designed to help you level up your virtual trading game.          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
        <div className="flex justify-center">
          {/* <Link
            href="#"
            className="px-5 py-2.5 border border-gray-100 dark:border-gray-900 text-blue-600 dark:text-gray-300 flex items-center gap-x-3"
          >
            See More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
