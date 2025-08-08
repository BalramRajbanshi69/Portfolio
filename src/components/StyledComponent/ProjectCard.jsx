
import React, { useState } from "react";

import Project1 from "../../assets/projects/food.svg";
import Project2 from "../../assets/projects/admin.svg";
import Project3 from "../../assets/projects/ecommerce.svg";
import Project4 from "../../assets/projects/Hospital.svg";
import Project5 from "../../assets/projects/book_store.svg";
import Project6 from "../../assets/projects/book_store_admin.svg";
import Project7 from "../../assets/projects/students1.svg";
import Project8 from "../../assets/projects/Authentication.svg";
import Project9 from "../../assets/projects/todo.svg";
import Project10 from "../../assets/projects/ecommerce-simple.svg";



import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiCodeBoxLine } from "react-icons/ri";
import SeeMore from "./SeeMore";

const projects = [
   {
    id: 1,
    image: Project1,
    title: "Food Delivery System",
    github: "https://github.com/BalramRajbanshi69/FoodDeliverySystem_Frontend",
    live: "https://food-delivery-system-frontend.vercel.app/"
  },
   {
    id: 2,
    image: Project2,
    title: "Food Admin Dashboard",
    github: "https://github.com/BalramRajbanshi69/FoodDeliverySystem_Admin",
    live: "https://food-delivery-system-admin-silk.vercel.app/"
  },
  {
    id: 3,
    image: Project3,
    title: "Ecommerce-Ecofriend-MERN",
    github: "https://github.com/BalramRajbanshi69/Ecommerce_MERN_Frontend",
    live: "https://ecommerce-mern-theta-kohl.vercel.app/"
  },
  
  {
    id: 4,
    image: Project4,
    title: "Doctor Appointment System",
    github: "https://github.com/BalramRajbanshi69/Hospital_Management_System_MERN",
    live: "https://hosms-mern.vercel.app/"
  },
  {
    id: 5,
    image: Project5,
    title: "Book Store System",
    github: "https://github.com/BalramRajbanshi69/BookStore_System",
    live: "https://book-store-system-virid.vercel.app/"
  },
   {
    id: 6,
    image: Project6,
    title: "Admin Book Store",
    github: "https://github.com/BalramRajbanshi69/BookStore_Admin",
    live: "https://book-store-admin-lovat.vercel.app/"
  },
  {
    id: 7,
    image: Project7,
    title: "Student Management System",
    github: "https://github.com/BalramRajbanshi69/Student_Management_System_MERN_Client",
    live: "https://sms-mern.vercel.app/"
  },
 
  {
    id: 8,
    image: Project8,
    title: "Authentication Register Login",
    github: "https://github.com/BalramRajbanshi69/Authenticate_client",
    live: "https://authentication-ten-cyan.vercel.app/"
  },
  {
    id: 9,
    image: Project9,
    title: "Todo App",
    github: "https://github.com/BalramRajbanshi69/Todo_client",
    live: "https://todo-task-app-indol.vercel.app/"
  },
  {
    id: 10,
    image: Project10,
    title: "Mern Simple Ecommerce",
    github: "https://github.com/BalramRajbanshi69/mern_practice_ecom_client",
    live: "https://mern-simple-ecom.vercel.app/"
  },
 
];

const ProjectCard = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-8">
      {displayedProjects.map((project) => (
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

         {/* Button to Show All Projects */}
      {/* Button to Show All Projects */}
      <div className="col-span-full text-center mt-4">
        <SeeMore toggleShowAll={() => setShowAll(!showAll)} showAll={showAll} />
      </div>
    </div>
  );
};

export default ProjectCard;

