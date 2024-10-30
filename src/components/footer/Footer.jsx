import React from "react";
import Logo from "../../images/Linkedgagefull-white.png";

const Footer = () => {
  return (
    <div>
      <footer className="px-4 divide-y bg-zinc-900 text-gray-50">
        <div className="container mx-auto pl-4 lg:pl-32 flex flex-col lg:flex-row lg:space-y-0 space-y-8 justify-between items-center">
          <div className="flex-1 flex flex-col lg:justify-center items-center lg:items-start">
            <a href="/">
              <img src={Logo} alt="Homepage" className="w-56 mt-2 h-auto" />
            </a>
            <p className="w-11/12 lg:w-96 text-center lg:text-left text-sm lg:text-base">
              Effortlessly elevate your LinkedIn game with AI-powered,
              custom-tailored comments. Boost your engagement in real-time,
              across any language, with just one click!
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center py-10">
            <div className="space-y-3">
              <h3 className="uppercase text-center lg:text-left dark:text-gray-900 text-sm lg:text-base">
                Developers
              </h3>
              <ul className="space-y-1 text-center lg:text-left text-sm lg:text-base">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline"
                  >
                    Public API
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline"
                  >
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="uppercase text-center lg:text-left dark:text-gray-900 mt-4 text-sm lg:text-base">
              Social media
            </div>
            <div className="flex justify-center lg:justify-start space-x-3 mt-2">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className="flex items-center p-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.073 1.557-0.333 2.405-0.553 2.968-0.291 0.751-0.635 1.276-1.197 1.844-0.557 0.557-1.088 0.901-1.839 1.192-0.563 0.22-1.411 0.48-2.968 0.553-1.688 0.072-2.199 0.093-6.469 0.093s-4.781-0.021-6.469-0.093c-1.557-0.073-2.405-0.333-2.968-0.553-0.751-0.291-1.276-0.635-1.844-1.197-0.557-0.557-0.901-1.088-1.192-1.839-0.22-0.563-0.48-1.411-0.553-2.968-0.072-1.688-0.093-2.199-0.093-6.469s0.021-4.781 0.093-6.469c0.073-1.557 0.333-2.405 0.553-2.968 0.291-0.751 0.635-1.276 1.197-1.844 0.557-0.557 1.088-0.901 1.839-1.192 0.563-0.22 1.411-0.48 2.968-0.553 1.688-0.072 2.199-0.093 6.469-0.093zM16 6.458c-5.211 0-9.542 4.331-9.542 9.542 0 5.211 4.331 9.542 9.542 9.542 5.211 0 9.542-4.331 9.542-9.542 0-5.211-4.331-9.542-9.542-9.542zM16 20.625c-2.541 0-4.625-2.084-4.625-4.625s2.084-4.625 4.625-4.625c2.541 0 4.625 2.084 4.625 4.625s-2.084 4.625-4.625 4.625zM21.688 7.313c-0.794 0-1.438-0.644-1.438-1.438s0.644-1.438 1.438-1.438c0.794 0 1.438 0.644 1.438 1.438s-0.644 1.438-1.438 1.438z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pt-4 pb-6">
          <span className="text-center text-sm text-gray-400">
            &copy; 2024 Linkedgage. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
