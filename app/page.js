"use client";
import React from "react";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Typed from "typed.js";

export default function Home() {
  const el = useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Coding",
        "Web Devlopment",
        "Blog",
        "CodeWithLord",
        "Software Engineering",
        "Data Science",
      ],
      typeSpeed: 50,
    });
    return () => {
      typed.destroy();
    };
  });
  // <span ref={el}/>

  return (
    <main className="flex-1 xl:pt-[5.5rem]">
      <section className="container px-4 py-8 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">personal portfolio</span>{" "}
            showcasing <br className="hidden lg:block" /> my journey in{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Explore my projects and contributions using Tailwind CSS and other
            modern technologies. <br className="hidden lg:block" /> Discover how
            I can help bring your ideas to life!
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="portfolio illustration"
            className="w-full h-full max-w-md mx-auto"
            width={500}
            height={500}
          />
        </div>
      </section>

      {/* Pricing  */}
      <section className="py-20 bg-gray-100 dark:bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Pricing Plans
          </h2>
          <div className="flex flex-wrap justify-center space-x-4 space-y-4 md:space-y-0">
            {/* Basic Tier */}
            <div className="dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 w-full max-w-xs">
              <h3 className="text-xl text/background font-semibold">Basic</h3>
              <p className="mt-2 text/background">
                Perfect for individuals and small projects.
              </p>
              <p className="mt-4 text-3xl font-bold text/background">
                $10 / month
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-green-500"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zM4 10a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2zM3 14a1 1 0 001 1h12a1 1 0 000-2H4a1 1 0 00-1 1z" />
                  </svg>
                  <span className="ml-2 text/background">
                    Feature 1: Up to 5 projects
                  </span>
                </li>
                <li className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-green-500"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zM4 10a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2zM3 14a1 1 0 001 1h12a1 1 0 000-2H4a1 1 0 00-1 1z" />
                  </svg>
                  <span className="ml-2 text/background">
                    Feature 2: Basic Support
                  </span>
                </li>
                <li className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-green-500"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zM4 10a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2zM3 14a1 1 0 001 1h12a1 1 0 000-2H4a1 1 0 00-1 1z" />
                  </svg>
                  <span className="ml-2 text/background">
                    Feature 3: 2GB Storage
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                * Best suited for personal use.
              </p>
              <button className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 w-full">
                Get Started
              </button>
            </div>

            {/* Standard Tier */}
            <div className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 w-full max-w-xs">
              <h3 className="text-xl font-semibold dark:text-gray-100 text-gray-800">
                Standard
              </h3>
              <p className="mt-2 text/background">
                Ideal for freelancers and small businesses.
              </p>
              <p className="mt-4 text-3xl font-bold text/background">
                $30 / month
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-green-500"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zM4 10a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2zM3 14a1 1 0 001 1h12a1 1 0 000-2H4a1 1 0 00-1 1z" />
                  </svg>
                  <span className="ml-2 text/background">
                    Feature 1: Up to 15 projects
                  </span>
                </li>
                <li className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-green-500"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zM4 10a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2zM3 14a1 1 0 001 1h12a1 1 0 000-2H4a1 1 0 00-1 1z" />
                  </svg>
                  <span className="ml-2 text/background">
                    Feature 2: Priority Support
                  </span>
                </li>
                <li className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-green-500"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zM4 10a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2zM3 14a1 1 0 001 1h12a1 1 0 000-2H4a1 1 0 00-1 1z" />
                  </svg>
                  <span className="ml-2 text/background">
                    Feature 3: 10GB Storage
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                * Recommended for growing teams.
              </p>
              <button className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 w-full">
                Get Started
              </button>
            </div>

            {/* Premium Tier */}
            <div className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 w-full max-w-xs">
              <h3 className="text-xl font-semibold text/background">Premium</h3>
              <p className="mt-2 text/background">
                For larger teams and advanced projects.
              </p>
              <p className="mt-4 text-3xl font-bold text/background">
                $60 / month
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-green-500"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zM4 10a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2zM3 14a1 1 0 001 1h12a1 1 0 000-2H4a1 1 0 00-1 1z" />
                  </svg>
                  <span className="ml-2 text/background">
                    Feature 1: Unlimited projects
                  </span>
                </li>
                <li className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-green-500"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zM4 10a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2zM3 14a1 1 0 001 1h12a1 1 0 000-2H4a1 1 0 00-1 1z" />
                  </svg>
                  <span className="ml-2 text/background">
                    Feature 2: 24/7 Support
                  </span>
                </li>
                <li className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-green-500"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3a1 1 0 011 1v2a1 1 0 11-2 0V4a1 1 0 011-1zM4 10a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2zM3 14a1 1 0 001 1h12a1 1 0 000-2H4a1 1 0 00-1 1z" />
                  </svg>
                  <span className="ml-2 text/background">
                    Feature 3: 50GB Storage
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                * Best for enterprise-level solutions.
              </p>
              <button className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 w-full">
                Get Started
              </button>
            </div>
          </div>

          {/* Discounts and Offers
          <div className="mt-12 text-center">
            <h4 className="text-xl font-semibold">Special Offer</h4>
            <p className="mt-2 text/background">
              Sign up for the annual plan and save 15%!
            </p>
          </div>*/}
        </div>
      </section>

      {/* Testimonial  */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
            What Our Users Say
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="max-w-sm mx-4 my-4 p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
              <p className="text-gray-600 dark:text-gray-300 italic">
                "This app has completely changed the way I manage my projects.
                The Tailwind CSS components are intuitive and easy to use!"
              </p>
              <div className="mt-4 flex items-center">
                <img
                  src="/Assets/src/john-doe.jpg"
                  alt="User 1"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    John Doe
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Software Engineer
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-sm mx-4 my-4 p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
              <p className="text-gray-600 dark:text-gray-300 italic">
                "An incredible platform for building modern apps! The components
                are beautifully designed and easy to implement."
              </p>
              <div className="mt-4 flex items-center">
                <img
                  src="/Assets/src/jane-smith.jpg"
                  alt="User 2"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Jane Smith
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Product Manager
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-sm mx-4 my-4 p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
              <p className="text-gray-600 dark:text-gray-300 italic">
                "I love how easy it is to customize components with Tailwind.
                Highly recommend this app for any developer!"
              </p>
              <div className="mt-4 flex items-center">
                <img
                  src="/Assets/src/alex_johnson-headshot.webp"
                  alt="User 3"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Alex Johnson
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Web Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
