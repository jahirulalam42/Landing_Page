import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="navbar bg-black text-white py-4 text-base flex">
          <div className=" flex-1 justify-center">
            <button className="btn btn-ghost text-lg">LinkedIn</button>
          </div>
          <div className="flex-1 justify-center gap-4">
            <button className="btn btn-ghost text-lg">Home</button>
            <button className="btn btn-ghost bg-gradient-to-r from-blue-400 to-blue-950 text-white border-0 hover:from-blue-950 hover:to-blue-400 shadow-md text-lg">
              <div className="indicator">Download Extension</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
