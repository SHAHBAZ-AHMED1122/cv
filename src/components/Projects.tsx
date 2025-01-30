import React from "react";

function Projects() {
  return (
    <div className="px-14">
      <div className="mt-2">
        <h1 className="text-xl font-semibold border-b-2 border-black ">
         PERSONAL PROJECTS
        </h1>
      </div>
      <div>
        <div className="pt-1 px-4">
          <h1 className="font-bold text-xl">
            E-Commerce Website |{" "}
            <span className="font-normal">
              Next.js, Sanity, Tailwind.css, Shadcn, MaterialUI
            </span>
          </h1>
          <ul className="list-disc  ml-8 space-y-2 ">
            <li>
            Developed a fully responsive e-commerce web application using Next.js, Tailwind CSS, and Material-UI, ensuring scalability and seamless user experience across devices
            </li>
            <li>
            Implemented pixel-perfect designs based on Figma mockups, adhering to high UI/UX standards to deliver visually appealing and user-friendly interfaces.
            </li>
            <li>
            Optimized website performance by reducing image and asset sizes, resulting in faster load times and significantly enhancing overall user satisfaction and engagement.
            </li>
            <li>Live Link: https://hackhathon-e-commerce.netlify.app/</li>
          </ul>
        </div>
        <div className="pt-2 px-4">
          <h1 className="font-bold text-xl">
            Portfolio |{" "}
            <span className="font-normal">
              Next.js, Tailwind.css, Shadcn, MaterialUI
            </span>
          </h1>
          <ul className="list-disc  ml-8 space-y-2 mt-2">
            <li>
            Designed and developed a personal portfolio website using modern web technologies (HTML, CSS, JavaScript) to effectively showcase projects and highlight technical expertise.

            </li>
            <li>
            Built with a mobile-first approach, ensuring the portfolio is fully responsive and provides a seamless user experience across all devices and screen sizes.
            </li>
            <li>
            Optimized website performance and implemented SEO best practices, enhancing page load speed and improving search engine visibility, resulting in higher organic traffic.
            </li>
            <li>Live Link: https://shahbazportfolio-01.netlify.app/</li>
          </ul>
        </div>
       
      </div>
    </div>
  );
}

export default Projects;
