import React from "react";
import Bachelor from "../../assets/EducationLogo/TU.png";
import HighSchool from "../../assets/EducationLogo/araniko.jpg";
import School from "../../assets/EducationLogo/school.png";
import LoaderDot from "./LoaderDot";


const educationLogos = {
  graduation: Bachelor,
  highSchool: HighSchool,
  school: School
};


const educationData = {
  graduation: {
    id: 1,
    level: "Tribhuvan University , Bachelor's Degree",
    faculty: "Faculty of Science & Technology",
    program: "B.Sc. in Computer Science and Information Technology",
    college: "Mahendra Morang Adarsha Multiple Campus ",
    location: "Biratnagar, Morang",
    percentage: "70.83%",
    division: "First",
    achievements: [
      "Advanced Java Programming, C Programming, OOP",
      "Web Development,Advanced Database, Information Technology",
      "Data Structures and Algorithms, Artificial Intelligence",
      "Database Management System, Software Engineering",
    ],
  },
  highSchool: {
    id: 2,
    level: "Nepal Examination Board(NEB)",
    faculty: "Science Stream",
    program: "10+2 Science",
    college: "Araniko Awasiya Secondary School",
    location: "Biratnagar, Morang",
    percentage: "61.40%",
    division: "First",
    achievements: ["Mathematics, English", "Physics", "Biology, Nepali", "Chemistry"],
  },
  school: {
    id: 3,
    level: "School Leaving Certificate (SLC)",
    faculty: "General Education",
    program: "School Leaving Certificate",
    college: "Miniland English Boarding School",
    location: "Rangeli, Morang",
    percentage: "77.75%",
    division: "First",
    achievements: [
      "Science, Social Studies",
      "Mathematics,Nepali, Computer Science",
      "Health, Population & Environment Education",
      "English, Additional Mathematics",
    ],
  },
};

const CardEducation = ({ level }) => {
  const edu = educationData[level];
  const logo = educationLogos[level];

  return (
    <div className="w-full md:w-[400px] lg:w-[520px] rounded-lg transition-all duration-300 
      bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border border-[rgba(255,255,255,0.1)]
      hover:transform hover:-translate-y-4 hover:shadow-2xl hover:cursor-pointer">
      <div className="flex justify-center items-center pt-2 gap-1">
        <LoaderDot/>
      </div>
      
      <div className="card__content px-4 md:px-6 py-4">
        <div className="mb-6 text-white flex flex-col justify-center items-center font-['YesevaOne'] tracking-wide">
          <div className='flex justify-center items-center mb-2'>
            <img src={logo} alt={`${edu.level} Logo`} className='w-30 h-30 rounded-md object-contain' />
          </div>

          <div className="w-full text-center">
            <h3 className="text-lg md:text-xl font-bold text-cyan-400 mb-2">{edu.level}</h3>
            
            <h4 className="text-base md:text-lg font-semibold  px-2">
              {edu.college}
            </h4>
            <h4 className="text-base md:text-lg font-semibold mb-2 px-2">
              {edu.location}
            </h4>
            
            <p className="text-sm md:text-base text-gray-300 mb-2">
              {edu.faculty}
            </p>
            
            <p className="text-sm md:text-base text-gray-400 mb-3">
              {edu.program}
            </p>
          </div>
           <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-lg text-gray-400 mb-2">
            <span className='text-cyan-500'>Percentage : {edu.percentage}</span>
            <span className='text-cyan-500'>Division : {edu.division}</span>
          </div>

          <div className="text-sm md:text-base text-gray-300 w-full">
            <p className="font-semibold mb-3 text-center border-b border-gray-700 pb-2">
              Key Subjects
            </p>
            <div className="flex flex-col items-center space-y-2">
              {edu.achievements.map((achievement, index) => (
                <span key={index} className="text-gray-400">
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>


        <div className="flex justify-center items-center  gap-1 pb-2">
       <LoaderDot/>
      </div>

    </div>
  );
};

export default CardEducation;
