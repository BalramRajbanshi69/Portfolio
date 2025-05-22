import React from "react";
import EducationTool from "./StyledComponent/EducatonTool";
import DotLoader from "./StyledComponent/DotLoader";
import ContactCard from "./StyledComponent/ContactCard";
import { SiMinutemailer } from "react-icons/si";
import { SlLocationPin } from "react-icons/sl";
import { GiCheckMark } from "react-icons/gi";
import Mail from "./StyledComponent/Mail";

const Contact = () => {
  const contactInfo = {
    email: "balramrajbanshi4769@gmail.com",
    location: "Kathmandu, Nepal",
    available: "Available for full-time position",
  };

  return (
    <div>
      <section id="contact" className="max-w-[1200px] mx-auto pb-20">
        <div className="flex justify-center items-center pb-10">
          <EducationTool section="contact" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-8 px-4">
          {/* Left Column - Contact Information */}
          <div className="w-full md:w-1/3 text-white space-y-6 ">
            {/* Google Maps */}
            <div className="w-full mt-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.2777684411!2d85.28493293612318!3d27.70903024192621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1747856444702!5m2!1sen!2snp"
                height="300"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Location Map"
              />
            </div>
            {/* Contact Details */}
            <div className="space-y-4 mt-8 w-full flex flex-col items-center md:items-start">
              <h4 className="text-xl font-semibold text-cyan-400 font-['YesevaOne'] text-center md:text-left">
                Contact Details
              </h4>
              <div className="hidden md:block w-[200px] h-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 rounded-full"></div>

              <div className="space-y-2 text-gray-300 font-['YesevaOne'] text-lg tracking-wide flex flex-col items-center md:items-start cursor-pointer">
                {/* <SiMinutemailer color="0077b6" size={25}/>  */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 transform transition-transform duration-300 hover:scale-110 hover:text-cyan-400"
                >
                  <Mail />
                  <span className="text-center md:text-left">
                    {contactInfo.email}
                  </span>
                </a>
                <p className="flex items-center gap-2 transform transition-transform duration-300 hover:scale-110 hover:text-cyan-400">
                  <SlLocationPin color="dc2f02" size={25} />
                  <span className="text-center md:text-left">
                    {contactInfo.location}
                  </span>
                </p>
                <p className="text-green-400 flex items-center gap-2 transform transition-transform duration-300 hover:scale-110">
                  <GiCheckMark size={23} />
                  <span className="text-center md:text-left">
                    {contactInfo.available}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column - Vertical Line */}
          <div className="hidden md:block w-[2px] h-[600px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 rounded-full"></div>

          {/* Right Column - Contact Form */}
          <div className="w-full md:w-1/2 mt-8">
            <ContactCard />
          </div>
        </div>

        {/* Dot Loader */}
        <div className="py-20 flex justify-center items-center">
          <DotLoader />
        </div>

        {/* Bottom Divider */}
        <div className="hidden md:block w-full h-[2px] bg-gray-900"></div>
      </section>
    </div>
  );
};

export default Contact;
