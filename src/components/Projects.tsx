import React from "react";

function Projects() {
  return (
    <div className="px-14">
      <div className="mt-4">
        <h1 className="text-xl font-semibold border-b-2 border-black ">
          PROJECTS
        </h1>
      </div>
      <div>
        <div className="pt-2 px-4">
          <h1 className="font-bold text-xl">
            E-Commerce Website |{" "}
            <span className="font-normal">
              Next.js, Tailwind.css, Shadcn, MaterialUI
            </span>
          </h1>
          <ul className="list-disc  ml-8 space-y-2 mt-2">
            <li>
              Developed a responsive e-commerce web application using Next.js,
              Tailwind CSS, and Material-UI.
            </li>
            <li>
              Implemented pixel-perfect designs based on Figma mockups,
              maintaining high-quality UI/UX standards.
            </li>
            <li>
              Enhanced performance by optimizing images and assets, reducing
              load times to improve user satisfaction.
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
              Designed and developed a personal portfolio website using modern
              web technologies to showcase projects.
            </li>
            <li>
              Built with responsiveness in mind, ensuring the website delivers a
              consistent user experience across all devices.
            </li>
            <li>
              Optimized performance and SEO, improving website speed and
              visibility on search engines.
            </li>
            <li>Live Link: https://shahbazportfolio-01.netlify.app/</li>
          </ul>
        </div>
        <div className="pt-2 px-4">
          <h1 className="font-bold text-xl">
            Meme Generator |{" "}
            <span className="font-normal">
              Html5, CSS, Javascript, APIs, DOM manipulation
            </span>
          </h1>
          <ul className="list-disc  ml-8 space-y-2 mt-2">
            <li>
              Created an interactive meme page website to display popular and
              custom memes.
            </li>
            <li>
            Added features for dynamic content updates, showcasing an
              understanding of JavaScript and DOM manipulation.
            </li>
            <li>
            Optimized website performance for faster loading times and better user experience.
            </li>
            <li>Live Link: https://meme-page-byme.netlify.app/</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
