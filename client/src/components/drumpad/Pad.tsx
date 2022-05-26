import React from "react";

export default function Pad({ value }) {
  return (
    <div className="h-full w-full p-10 border-2 border-green-500 text-white">
      {value}
    </div>
  );
}
