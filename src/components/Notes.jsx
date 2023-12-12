import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";

function PersonalNotes() {
  const [setOpen, setIsOpen] = useState(false);

  const showDetails = () => {
    setIsOpen(!setOpen);
  };
  return (
    <>
      {window.innerWidth > 639 ? (
        <div className="bg-dark-purple relative grid xl:grid-cols-[300px_30px_auto] sm:grid-cols-[auto] my-40 h-screen rounded-xl w-[90%] mx-auto">
          <div className="bg-gray-500 my-10">
            <div
              className={`relative flex bg-darker-purple hover:shadow-[0_0_30px_5px_#492b7c] flex-col w-[70%] h-[12%] top-10 xl:left-12 sm:mx-auto rounded-xl text-center xl:pr-2 text-white leading-8 justify-center ${
                setOpen ? "border" : ""
              }`}
            >
              <p>Nume program</p>
              <p>Data</p>
              <button onClick={showDetails}>
                <AiIcons.AiOutlineArrowRight className="hover:bg-zinc-500 w-[24px] h-[24px] absolute right-3 top-[42%] border rounded-xl"></AiIcons.AiOutlineArrowRight>
              </button>
            </div>
          </div>
          {setOpen && (
            <>
              <div></div>
              <div className="relative text-white bg-darker-purple rounded-xl w-auto my-10 xl:mx-10 xl:end-0 overflow-y-scroll">
                <h1 className="flex text-xl justify-center mt-4">
                  Testing 123
                </h1>
                <div className="mt-10">Test 123</div>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="bg-dark-purple relative xl:gap-10 grid xl:grid-cols-[300px_auto] sm:grid-cols-[auto] my-40 h-screen rounded-xl w-[90%] mx-auto">
          <div className="relative flex bg-darker-purple border flex-col w-[70%] h-[12%] top-10 xl:left-10 sm:mx-auto rounded-xl text-center xl:pr-2 text-white leading-8 sm:justify-center">
            <p>Nume program</p>
            <p>Data</p>
            <button onClick={showDetails}>
              <AiIcons.AiOutlineArrowRight className="hover:bg-zinc-500 w-[24px] h-[24px] absolute right-3 top-[42%] border rounded-xl"></AiIcons.AiOutlineArrowRight>
            </button>
            {setOpen && (
              <div className="absolute text-white bg-red-500 h-10 rounded-xl w-full sm:top-[120%] xl:right-10 xl:end-0">
                <p>testing</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default PersonalNotes;
