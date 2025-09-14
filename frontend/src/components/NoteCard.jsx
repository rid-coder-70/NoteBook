import { PenSquareIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils.js"; // adjust path as needed

const NoteCard = ({ note }) => {
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-xl hover:-translate-y-1 
      transition-all duration-200 border-t-4 border-[#00FF9D]"
    >
      <div className="card-body p-5">
        {/* Title */}
        <h3 className="card-title text-lg font-semibold text-base-content line-clamp-1">
          {note.title}
        </h3>

        {/* Content preview */}
        <p className="text-base-content/70 text-sm leading-relaxed line-clamp-3">
          {note.content}
        </p>

        {/* Footer */}
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-xs text-base-content/60">
            {formatDate(note.createdAt)}
          </span>
          <div className="flex items-center gap-2">
            <button className="btn btn-ghost btn-xs hover:text-primary">
              <PenSquareIcon className="size-4" />
            </button>
            <button className="btn btn-ghost btn-xs text-error hover:bg-error/10">
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
