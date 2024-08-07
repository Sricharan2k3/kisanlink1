"use client";
import React, { useEffect } from "react";
import { BentoGridThirdDemo } from "../components/grid3";
import { BentoGridFirst } from "../components/grid1";

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
);

const BlogsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
    />
  </svg>
);

const ServicesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
    />
  </svg>
);

const AboutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
    />
  </svg>
);

const Navigation = () => {
  useEffect(() => {
    // Add smooth scrolling effect for anchor links
    const handleSmoothScroll = (event) => {
      if (event.target.tagName === "A" && event.target.hash) {
        event.preventDefault();
        const targetElement = document.querySelector(event.target.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  // List of navigation items with their labels and icons
  const navItems = [
    { name: "Farms", icon: <HomeIcon />, href: "#farms" },
    { name: "Products", icon: <BlogsIcon />, href: "#products" },
    { name: "Billing", icon: <ServicesIcon />, href: "#billing" },
    { name: "Output", icon: <AboutIcon />, href: "#outputpurchase" },
    { name: "Inventory", icon: <HomeIcon />, href: "#inventory" },
    { name: "Payments", icon: <BlogsIcon />, href: "#payments" },
    { name: "Farmers", icon: <ServicesIcon />, href: "#farmers" },
    { name: "Security", icon: <AboutIcon />, href: "#datasecurity" },
  ];

  return (
    <div className="navigation-container justify-center">
      <div className="container flex flex-row justify-center">
        <nav className="fixed flex justify-center my-5 py-2 items-center ml-64  bg-gray-700 rounded-3xl">
          <ul className="flex gap-3 py-1 px-5 ">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`gap-2 items-center text-white flex transition-all ease-in-out py-3 px-3 rounded-3xl hover:bg-blue-600 cursor-pointer`}
                >
                  {item.icon}
                  <span className="px-2 w-16">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Content Sections */}
      <div id="home" className="content-section mt-5">
        <BentoGridThirdDemo />
      </div>
      <div id="blogs" className="content-section mt-5">
        <BentoGridFirst />
      </div>
      <div id="services" className="content-section mt-5"></div>
      <div id="about" className="content-section mt-5"></div>
    </div>
  );
};

export default Navigation;
