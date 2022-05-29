import { useContext, useEffect } from "react";
import { useAudioPlayer } from "react-use-audio-player";
import { audioFileFromID } from "../lib/audio-files";
import { SocketContext, SocketType } from "../lib/socket";
import Pad from "./pad_components/Pad";
import PadFrame from "./pad_components/PadFrame";

const xAxis = ["1", "2", "3"];
const yAxis = ["A", "B", "C"];

export default function DrumPad() {
  const { triggeredNote, trigNote } = useContext(SocketContext) as SocketType;

  const file = audioFileFromID(triggeredNote);
  const { play, stop } = useAudioPlayer({
    src: file,
    format: "wav",
    autoplay: false,
  });

  useEffect(() => {
    play();
    trigNote("");
    setTimeout(() => {
      stop();
    }, 500);
  }, [triggeredNote]);

  return (
    <PadFrame>
      <>
        {xAxis.map((x) => {
          return yAxis.map((y) => {
            return <Pad key={y + x} value={y + x} />;
          });
        })}
      </>
    </PadFrame>
  );
}
