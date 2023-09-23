import React from "react";
import { useEffect } from "react";

function HomePage({ toggleVideo }) {
  useEffect(() => {
    toggleVideo(true); // Setează starea videoclipului să fie "true" pentru a porni videoclipul
    return () => {
      // La dezmontarea componentei HomePage, poți să oprești videoclipul dacă este necesar
      toggleVideo(false);
    };
  }, [toggleVideo]);
  return (
    <>
      <div className="relative top-90% w-auto h-1000 bg-gray-300 my-10 mx-1 border-1 border-lime rounded-3xl">
        <div className="relative text-white bg-gradient-to-b from-rgb(51, 51, 52) to-rgb(121, 126, 121) via-rgb(0, 0, 0) h-200 my-5 border-1 border-red-600 rounded-3xl p-0">
          <div className="bg-rgb(48, 45, 43) max-w-300 w-auto h-160 rounded-3xl relative my-20 ml-20">
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full max-w-400 z-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100">
                <path
                  d="M0,50 C100,0 300,100 400,50"
                  className="stroke-blue stroke-3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
