import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

function page() {
  return (
    <div>
      <div className=" w-[1000px]  items-center mx-auto shadow-2xl">
        <Header/>
       <Skills/>
       <Projects/>
       <Experience/>
       <Education/>
       
          
        </div>
    


      </div>
    
  );
}

export default page;
