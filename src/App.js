import { useState } from "react";
import Drum from "./components/Drum";
import boom from "./sounds/boom.wav";
import clap from "./sounds/clap.wav";
import hihat from "./sounds/hihat.wav";
import kick from "./sounds/kick.wav";
import openhat from "./sounds/openhat.wav";
import ride from "./sounds/ride.wav";
import snare from "./sounds/snare.wav";
import tink from "./sounds/tink.wav";
import tom from "./sounds/tom.wav";

function App() {
  const [sounds, setSounds] = useState([
    {
      name: "boom",
      sound: boom,
      key: "A",
    },
    {
      name: "clap",
      sound: clap,
      key: "Z",
    },
    {
      name: "hihat",
      sound: hihat,
      key: "E",
    },
    {
      name: "kick",
      sound: kick,
      key: "Q",
    },
    {
      name: "openhat",
      sound: openhat,
      key: "S",
    },
    {
      name: "ride",
      sound: ride,
      key: "D",
    },
    {
      name: "snare",
      sound: snare,
      key: "W",
    },
    {
      name: "tink",
      sound: tink,
      key: "X",
    },
    {
      name: "tom",
      sound: tom,
      key: "C",
    },
  ]);

  return (
    <div className="App">
      <h1>React Drumkit</h1>
      <div className="drums">
        <div className="drum-pad">
          {sounds.map((sound, i) => (
            <Drum key={i} letter={sound.key} sound={sound.sound} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
