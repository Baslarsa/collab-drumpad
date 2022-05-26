import React from "react";
import Pad from "./drumpad/Pad";
import PadFrame from "./drumpad/PadFrame";

const xAxis = ["1", "2", "3", "4", "5"];
const yAxis = ["A", "B", "C", "D", "E"];
export default function DrumPad() {
  return (
    <PadFrame>
      {xAxis.map((x) => {
        return yAxis.map((y) => {
          return <Pad value={y + x} />;
        });
      })}
    </PadFrame>
  );
}
