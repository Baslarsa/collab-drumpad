import classNames from "classnames";
import { useContext } from "react";
import { SocketContext, SocketType } from "../../lib/socket";

export default function Pad({ value }: { value: string }) {
  const { trigNote, triggeredNote } = useContext(SocketContext) as SocketType;

  const padColor = stringToColour(value + "randomize");
  return (
    <div className="h-36 w-36 cursor-pointer rounded-md relative">
      <div
        style={{
          backgroundColor: padColor,
          boxShadow: "3px 3px 1px 1px #252525",
        }}
        className="transition-color w-full h-full text-white mx-auto flex justify-center items-center rounded-md"
      >
        {value}
      </div>
      <div
        onClick={() => trigNote(value)}
        className={classNames(
          "absolute inset-0 rounded-md transition-all active:animate-ping bg-gray-700 active:bg-transparent"
        )}
      ></div>
    </div>
  );
}

const stringToColour = (str: string) => {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = "#";
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
};
