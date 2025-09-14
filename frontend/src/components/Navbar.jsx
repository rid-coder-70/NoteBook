import React from "react";
import { Link } from "react-router-dom"; // ensure correct import
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-primary font-mono tracking-tight">
            NoteBook
          </h1>

          <div className="flex items-center gap-3">
            <Link to="/create" className="btn btn-primary flex items-center gap-2">
              <PlusIcon className="w-5 h-5" /> {/* fixed */}
              <span className="hidden sm:inline">New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
