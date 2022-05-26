import React from "react";

export default function PadFrame({ children }) {
  return (
    <div className="border-red-500 border-4 grid grid-cols-5 gap-4">
      {children}
    </div>
  );
}
