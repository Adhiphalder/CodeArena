import React, { useState, useRef } from "react";
import SoftBackdrop from "./SoftBackdrop";

const InterViewHeader = () => {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  return (
    <>
      <header className="p-5 shadow-lg flex justify-between items-center bg-white/5 backdrop-blur-md relative">
        
        <div className="text-2xl font-bold text-slate-200">
          CodeArena
        </div>

        <div className="relative" ref={headerRef}>
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => setOpen(!open)}
          >

            <div className="w-9 h-9 rounded-full bg-indigo-900 text-white flex items-center justify-center text-sm">
              SA
            </div>

            <h3 className="text-slate-300 font-semibold mr-3">
              Sanket Adhikary
            </h3>
          </div>
        </div>
      </header>
    </>
  );
};

export default InterViewHeader;