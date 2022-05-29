import { useContext, useEffect, useState } from "react";
import { useAudioPlayer } from "react-use-audio-player";
import { audioFileFromID } from "../lib/audio-files";
import { SocketContext, SocketType } from "../lib/context/socket";
import Pad from "./pad_components/Pad";
import PadFrame from "./pad_components/PadFrame";

const xAxis = ["1", "2", "3"];
const yAxis = ["A", "B", "C"];

export default function DrumPad() {
  const { socket } = useContext(SocketContext) as SocketType;
  const [triggeredNote, setTriggeredNote] = useState("");
  const { play } = useAudioPlayer({
    src: audioFileFromID(triggeredNote),
    format: "wav",
    autoplay: false,
    preload: true,
  });

  useEffect(() => {
    socket.on("note_trigger", (note_id) => {
      if (note_id !== "") {
        setTriggeredNote(note_id);
      }
    });
  }, [socket]);

  const handleClick = (value: string) => {
    socket.emit("note_trigger", value);
  };

  useEffect(() => {
    if (!triggeredNote) {
      play();
    }
    setTimeout(() => setTriggeredNote(""), 50);
  }, [triggeredNote, play]);

  return (
    <PadFrame>
      <>
        {xAxis.map((x) => {
          return yAxis.map((y) => {
            return (
              <Pad
                key={y + x}
                value={y + x}
                triggeredNote={triggeredNote}
                onClick={() => handleClick(y + x)}
              />
            );
          });
        })}
      </>
    </PadFrame>
  );
}
