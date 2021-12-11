import React, { useState } from "react";
import * as Tone from "tone";

import { MusicalAddress } from "./components";
import { note } from "./utils/librarySound";

const synth = new Tone.Synth().toDestination();
const amSynth = new Tone.AMSynth().toDestination();
const fmSynth = new Tone.FMSynth().toDestination();

const testAddrr = "bostrom1p0r7uxstcw8ehrwuj4kn8qzzs0yypsjwxgd445";
const testArr = [
  {
    note: "C3",
    duration: "16n",
  },
  {
    note: "E3",
    duration: "16n",
  },
  {
    note: "C3",
    duration: "16n",
  },
  {
    note: "G3",
    duration: "16n",
  },
];

const getNoteFromAdd = (addrr) => {
  const arrStr = Array.from(addrr.slice(8));
  let duration = "16n";
  const arrNote = [];
  arrStr.forEach((item) => {
    if (note[item] === "sustein") {
      duration = "8n";
    }
    const obj = { note: note[item], duration };
    arrNote.push(obj);
    if (note[item] !== "sustein") {
      duration = "16n";
    }
  });
  return arrNote;
};

function App() {
  const onClickMusicalAddress = () => {
    const arrNote = getNoteFromAdd(testAddrr);
    console.log(`arrNote`, arrNote);
    makeSound(arrNote);
  };

  const makeSound = (arrNote) => {
    let cout = 0;
    const now = Tone.now();

    arrNote.forEach((item) => {
      if (item.note !== "sustein") {
        const time = now + cout;
        synth.triggerAttackRelease(item.note, item.duration, time);
        cout += 0.2;
      } else {
        cout += 0.2;
      }
    });
  };

  return (
    <div id="wrapper">
      <div className="passport">
        <div className="passportLeftSide">
          <div className="citizenshipH3">
            <h3>Earth Citizehship</h3>
          </div>
          <div className="passportInfo">
            <div className="passportInfoCell">
              <p>el-nivvo</p>
            </div>
            <div className="passportInfoCell">
              <p>karma 🔮</p>
            </div>
            <div className="passportInfoCell">
              <p>addresses</p>
            </div>
          </div>
          <div className="lampContainer earthCitizenshipLamp">
            <div
              className="lamp leftWhiteLamp "
              style={{ borderRadius: "100px 0 0 0" }}
            ></div>
            <div className="leftWhitelight"></div>
          </div>
          <div className="lampContainer passportLeftLamp">
            <div
              className="lamp leftGreenLamp "
              style={{ borderRadius: "0 0 0 100px" }}
            ></div>
            <div className="leftGreenLight"></div>
          </div>
        </div>
        <div className="passportRightSide">
          <div className="passportAvatar">
            <div className="avatarContainer"></div>
          </div>
          <div className="passportIcons">
            <div className="atomIcon"></div>
            <div className="etheriumIcon"></div>
            <div className="bostromIcon"></div>
          </div>
          <div className="lampContainer passportRightLamp">
            <div className="lamp rightGreenLamp"></div>
            <div className="rightGreenLight"></div>
          </div>
        </div>
        <MusicalAddress onClick={() => onClickMusicalAddress()} />
      </div>
    </div>
  );
}

export default App;
