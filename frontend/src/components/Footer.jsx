import React from "react";
const Footer = () => {
  return (
    <div className="border-b border-solid border-gray-300 box-border block font-poppins font-normal leading-6 text-base mx-8 ">
      <div className="border-t border-slate-200 mb-12"></div>
      <div className="pb-12 text-sm text-slate-500 flex flex-col-reverse md:flex-row md:justify-between">
        <div>
          <p>
            Created and Code by
            <a
              href="https://github.com/AshishRaj04"
              className="ml-1 text-slate-800 border-b border-slate-400 hover:border-slate-800 transition-colors duration-2"
            >
              Ashish Raj
            </a>{" "}
            🔥
          </p>
        </div>
        <div className="text-right">
          <div className="flex mb-3">
            <a href="" className="after:content-['·'] after:pl-2">
              opnion
            </a>
            <a className="ml-2 after:content-['·'] after:pl-2" href="/terms">
              Terms
            </a>
            <a className="ml-2 after:content-['·'] after:pl-2" href="/privacy">
              Privacy
            </a>
            <a href="https://twitter.com/node_reactJS" className="ml-2">
              Twitter
            </a>
          </div>
          <div className="">Copyright ©2024 ASHISH RAJ</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
