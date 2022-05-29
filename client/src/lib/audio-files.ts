export const audioFileFromID = (id: string) => {
  switch (id) {
    case "A1":
      return "audio/drums/kick.wav";
    case "A2":
      return "audio/drums/snare.wav";
    case "A3":
      return "audio/drums/hihat.wav";
    case "B1":
      return "audio/drums/tom-lo.wav";
    case "B2":
      return "audio/drums/tom-mid.wav";
    case "B3":
      return "audio/drums/tom-hi.wav";
    case "C1":
      return "audio/drums/cowbell.wav";
    case "C2":
      return "audio/drums/shaker.wav";
    case "C3":
      return "audio/drums/tamb.wav";
    default:
      return;
  }
};
