import React from "react";

const Hero: React.FC = () => {

  return (
    <>
      <div className="relative w-screen h-screen flex items-center justify-center bg-conic-gradient-e2">
        <div className="grid grid-cols-2 items-center justify-between px-10 py-14 min-h-screen">
          {/* Left Column: "LEX" */}
          <p className="text-[8vw] text-black font-bold font-marzo-e2">LEX</p>

          {/* Right Column: Description + Button */}
          <div className="text-black text-lg text-right max-w-lg leading-tight">
            <p>Build Enterprise-Grade Apps in Minutes, Not Months.</p>
            <p className="italic text-gray-800">
              No Frontend. No Backend. Just Lex
            </p>

            {/* Button & Small Text (Flex to keep them inline) */}
            <div className="mt-6 flex items-center space-x-6">
              {/* Documentation Button */}
              {/* <a className="bg-pink border border-black text-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition">
                Get-Started
              </a> */}

              {/* Simple Text */}
              <p className="text-sm text-gray-600">
                To get started, start by modifying your <code>App.tsx</code>
              </p>

              <p className="text-sm text-gray-600">
                or quickly configure your app with the <strong>Lex Developer's interface</strong> and <strong>CLI</strong>
              </p>
            </div>
          </div>
        </div>
        {/* Top Left Rotated Text */}
        <div className="absolute top-[70%] left-4 text-black text-sm tracking-wide rotate-[-90deg] origin-left">
          The next generation software development framework
        </div>

        {/* Right Side Text */}
      </div>
    </>
  );
};

export default Hero;
