import classNames from "classnames";

export default function Pad({
  value,
  triggeredNote,
  onClick,
}: {
  value: string;
  triggeredNote: string;
  onClick: () => void;
}) {
  const padColor = stringToColour(value + "randomize");

  return (
    <div
      className="h-36 w-36 cursor-pointer rounded-md relative"
      onClick={onClick}
    >
      <div
        style={{
          backgroundColor: padColor,
          boxShadow: "3px 3px 1px 1px #1d1d1d",
        }}
        className="transition-color w-full h-full text-white mx-auto flex justify-center items-center rounded-md"
      />

      <div
        className={classNames(
          "absolute inset-0 rounded-md transition-all bg-neutral-800 active:bg-transparent active:animate-ping",
          {
            hidden: triggeredNote === value,
          }
        )}
      ></div>
    </div>
  );
}

//Get random color from a string to put on the pads :)
//Just a random thing I found on the webzz

const stringToColour = (str: string) => {
  var hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = "#";
  for (let i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
};
