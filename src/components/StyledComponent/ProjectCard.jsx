import React from "react";

import Project1 from "../../assets/projects/students1.svg";
import Project2 from "../../assets/projects/Hospital.svg";
import Project3 from "../../assets/projects/ecommerce.svg";
import Project4 from "../../assets/projects/ecommerce-simple.svg";
import Project5 from "../../assets/projects/todo.svg";
import Project6 from "../../assets/projects/students1.svg";

import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiCodeBoxLine } from "react-icons/ri";

const projects = [
  {
    id: 1,
    image: Project1,
    title: "Student Management System",
    github: "https://github.com/BalramRajbanshi69/Student_Management_System_MERN_Client",
    live: "https://sms-mern.vercel.app/"
  },
  {
    id: 2,
    image: Project2,
    title: "Doctor Appointment System",
    github: "https://github.com/BalramRajbanshi69/Hospital_Management_System_MERN",
    live: "https://hosms-mern.vercel.app/"
    
  },
  {
    id: 3,
    image: Project3,
    title: "Ecommerce-Ecofriend-MERN",
    github: "https://github.com/BalramRajbanshi69/EcoMERN_Frontend",
    live: "https://ecofriend-mern.vercel.app/"
  },


    {
    id: 4,
    image: Project4,
    title: "Mern Simple Ecommerce",
    github: "https://github.com/BalramRajbanshi69/mern_practice_ecom_client",
    live: "https://mern-simple-ecom.vercel.app/"
  },
  {
    id: 5,
    image: Project5,
    title: "Todo App",
    github: "https://github.com/BalramRajbanshi69/Hospital_Management_System_MERN",
    live: "https://hosms-mern.vercel.app/"
    
  },
  {
    id: 6,
    image: Project6,
    title: "Ecommerce-Ecofriend-MERN",
    github: "https://github.com/BalramRajbanshi69/EcoMERN_Frontend",
    live: "https://ecofriend-mern.vercel.app/"
  },
];



const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-full h-[400px] relative group 
            overflow-hidden rounded-lg transition-all duration-300 
            bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border border-[rgba(255,255,255,0.1)]
            hover:transform hover:-translate-y-4 hover:shadow-2xl hover:cursor-pointer"
        >
          {/* Background Image */}
          <img 
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-contain object-center 
              transition-all duration-500 group-hover:scale-110 z-0"
          />


          {/* Semi-transparent Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
            transition-opacity duration-300 z-10" />
          
          {/* Links Container - Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <div className="flex items-center gap-4">
              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white backdrop-blur-sm px-4 py-2 
                  rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <SiGithub className="text-xl" />
                <span>Github</span>
                <RiCodeBoxLine className="text-xl" />
              </a>
            </div>


            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white backdrop-blur-sm px-4 py-2 
                rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <span>Live Demo</span>
              <FaExternalLinkAlt />
            </a>

            <h3 className="text-xl text-white font-bold intro">{project.title}</h3>

          </div>
        </div>
      ))}
    </div>

  );
};

export default ProjectCard;
