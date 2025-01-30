import React from "react";

function Experience() {
  return (
    <div className="px-14">
      <div className="mt-2">
        <h1 className="text-xl font-semibold border-b-2 border-black ">
         WORK EXPERIENCE
        </h1>
      </div>
      <div>
        <div className="flex justify-between items-center pt-1 px-4">
          <div>
            <h1 className="font-bold text-xl">
              Senior Web Developer - GIAIC
            </h1>
           
          </div>
          <div>
            <h1 className="font-semibol text-xl">Feb 2024 - Present</h1>
          </div>
        </div>
        <div> <ul className="list-disc  ml-8 space-y-2 mt-">
              <li>
              "Engineered dynamic and scalable web applications using React.js, Next.js, and Tailwind CSS, adhering to best practices for performance optimization and maintainability
              </li>
              <li>
              Collaborated with cross-functional teams using Git/GitHub for version control, ensuring seamless integration, code consistency, and efficient project management
              </li>
              <li>
              Developed responsive and accessible user interfaces with modern web technologies, prioritizing usability, cross-browser compatibility, and mobile-first design principles
              </li>
             
            </ul>
            </div>
      </div>
      <div>
        <div className="flex justify-between items-center pt-2 px-4">
          <div>
            <h1 className="font-bold text-xl">
            Freelance Web Developer - Upwork
            </h1>
           
          </div>
          <div>
            <h1 className="font-semibol text-xl">Nov 2023 - Oct 2024 </h1>
          </div>
        </div>
        <div> <ul className="list-disc  ml-8 space-y-2 mt-2">
              <li>
              Collaborated with clients to gather and analyze requirements, delivering tailored, client-specific solutions that align with business objectives and user needs
              </li>
              <li>
              Led and managed full project lifecycles, driving on-time delivery and meeting strict deadlines while maintaining high levels of client satisfaction through meticulous planning, execution, and quality control
              </li>
              <li>
              Performed regular maintenance and enhancements for 10+ client websites monthly, implementing performance optimizations that reduced page load times by an average of 2 seconds, resulting in significant improvements in user experience and engagement.
              </li>
            </ul>
            </div>
      </div>
    </div>
  );
}

export default Experience;
