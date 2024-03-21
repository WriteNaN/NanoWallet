import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const BarIcon = () => {
    return isOpen ? (
      <FaBarsStaggered size={18} className="text-gray-600" />
    ) : (
      <FaBars size={18} className="text-gray-600" />
    );
  };
  return (
    <nav className="p-3 bg-black/60 md:hidden flex justify-between">
      <div className="flex flex-row justify-start items-center space-x-2">
        <div role="button" onClick={() => setOpen(!isOpen)}>
          <BarIcon />
        </div>
        <span className="select-none hover:text-blue-500">Wallet</span>
      </div>

      <div className="flex justify-end items-center">
        <div className="items-center hover:text-gray-500 align-center" role="button">
            <FaQuestionCircle size={18} />
        </div>
      </div>
    </nav>
  );
}
