import React from "react";

function Experience() {
  return (
    <div className="px-14">
      <div className="mt-4">
        <h1 className="text-xl font-semibold border-b-2 border-black ">
          EXPERIENCE
        </h1>
      </div>
      <div>
        <div className="flex justify-between items-center pt-2 px-4">
          <div>
            <h1 className="font-bold text-xl">
              Senior Web Development Student - GIAIC
            </h1>
           
          </div>
          <div>
            <h1 className="font-semibol text-xl">Feb 2024 - Present</h1>
          </div>
        </div>
        <div> <ul className="list-disc  ml-8 space-y-2 mt-2">
              <li>
              Developed web applications using React.js, Next.js, and Tailwind CSS.
              </li>
              <li>
              Collaborated on team projects using Git/GitHub for version control.
              </li>
              <li>
              Participated in workshops and hackathons to improve coding and problem-solving abilities.
              </li>
              <li>
              Implemented responsive designs and user-friendly interfaces using modern web technologies.
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
              Communicated with clients to understand requirements and deliver tailored solutions.
              </li>
              <li>
              Enhanced website performance, UI/UX, and responsiveness.
              </li>
              <li>
              Managed projects independently, ensuring timely delivery and client satisfaction.
              </li>
              <li>
              Provided regular updates and ongoing maintenance for websites.
              </li>
            </ul>
            </div>
      </div>
    </div>
  );
}

export default Experience;
