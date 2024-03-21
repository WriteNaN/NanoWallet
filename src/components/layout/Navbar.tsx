import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import "../../styles/anims.css";

export default function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const x = () => {
    const elem = document.getElementById("slider");
    elem?.classList.add("slide-out");
    setTimeout(() => setOpen(false), 500);
  }

  const BarIcon = () => {
    return isOpen ? (
      <FaBarsStaggered
        size={18}
        className="text-gray-500 hover:text-gray-600"
      />
    ) : (
      <FaBars size={18} className="text-gray-500 hover:text-gray-600" />
    );
  };
  return (
    <>
      <nav className="p-3 relative bg-black/60 md:hidden flex justify-between">
        <div className="flex flex-row justify-start items-center space-x-2">
          <div role="button" onClick={() => {
            if (isOpen) return x();
            return setOpen(!isOpen);
          }}>
            <BarIcon />
          </div>
          <span className="select-none"></span>
        </div>

        <div className="flex justify-end items-center">
          <div
            className="items-center hover:text-gray-500 align-center"
            role="button"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <FaQuestionCircle size={18} className="text-gray-500 hover:text-gray-600" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="bg-black text-white p-3 rounded-full">
                    This is a fully client side version of wallet made by{" "}
                    <a
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      href="https://nano.gift/"
                    >
                      gift
                    </a>{" "}
                    devs!
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div id="slider" className="slide-in bg-black md:hidden w-screen">
          <div>

          </div>
        </div>
      )}
    </>
  );
}
