import React from 'react'

const FooterHomeLink = () => {
      const footerLinks = [
    { name: "Home", path: "home" },
    { name: "Skills", path: "skills" },
    { name: "Projects", path: "projects" },
    { name: "Education", path: "education" },
    { name: "Contact", path: "contact" },
  ];

  const handleClick = (path) => {
    if (path === "home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <div>
        <div className='text-gray-400 flex flex-col gap-1'>
                    {footerLinks.map((link) => (
                        <div
                            key={link.name}
                            onClick={() => handleClick(link.path)}
                            className='cursor-pointer hover:text-white transition-colors'
                        >
                            {link.name}
                        </div>
                    ))}
                </div> 
    </div>
  )
}

export default FooterHomeLink