import React from "react";
import Logo from "../../images/Linkedgagefull-white.png";

const Footer = () => {
  return (
    <div>
      <footer className="px-4 divide-y bg-zinc-900 text-gray-50">
        <div className="container flex flex-col py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0 justify-center items-center">
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start">
            <a href="/">
              <img src={Logo} alt="Homepage" className="w-56 mt-2 h-auto" />
            </a>
            <p className="w-full max-w-xs text-center lg:text-left">
              Effortlessly elevate your LinkedIn game with AI-powered,
              custom-tailored comments. Boost your engagement in real-time,
              across any language, with just one click!
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="space-y-3">
              <h3 className="uppercase text-center lg:text-left dark:text-gray-900">
                Developers
              </h3>
              <ul className="space-y-1 text-center lg:text-left">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Public API
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="uppercase text-center lg:text-left dark:text-gray-900 mt-4">
              Social media
            </div>
            <div className="flex space-x-3 justify-center mt-2">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center p-1"
              >
                {/* Facebook SVG */}
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className="flex items-center p-1"
              >
                {/* Twitter SVG */}
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className="flex items-center p-1"
              >
                {/* Instagram SVG */}
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-6 text-sm text-center bg-black border-none text-gray-50 w-full">
        © 2024 LinkedGage. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
